import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {Input, Button,message} from 'antd';

// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { login, fetchLoginUser } from '../../actions/users.action.js';

import { LOGIN_USER_ID, LOGIN_USER_TOKEN } from '../../constants';
import { usernameRegExp, emailRegExp, pwdRegExp } from '../../constants/RegExp';
import './index.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.state = {
      showUeTip: false,
      showPwdTip: false,
      ueTip: '不能为空',
      pwdTip: '不能为空'
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    for (let i = 0; i < form.elements.length; i++) {
      const ee = form.elements[i];
      if (ee.tagName === 'INPUT' || ee.tagName === 'SELECT') {
        if (!this.handleFormChange(ee.name, ee.value)) {
          return;
        }
      }
    }
    this.props.onSubmit({ email: this.email, pwd: this.pwd });
  }

  handleChange(e) {
    const target = e.target;
    this.handleFormChange(target.name, target.value);
  }

  handleFormChange(name, value) {
    if (name === 'usernameOrEmail') {
      this.email = value;
      if (value === '') {
        this.setState({ showUeTip: true, ueTip: '不能为空' });
        return false;
      }
      if (!(usernameRegExp.test(value) || emailRegExp.test(value))) {
        this.setState({ showUeTip: true, ueTip: '用户名或邮箱格式不正确' });
        return false;
      }
      this.setState({ showUeTip: false });
      return true;
    } else if (name === 'password') {
      this.pwd = value;
      if (value === '') {
        this.setState({ showPwdTip: true, pwdTip: '不能为空' });
        return false;
      }
      if (!pwdRegExp.test(value)) {
        this.setState({ showPwdTip: true, pwdTip: '密码格式不正确' });
        return false;
      }
      this.setState({ showPwdTip: false });
      return true;
    }
    return true;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 600) {
      if (nextProps.isLogin) {
        localStorage.setItem(LOGIN_USER_ID, nextProps.loginUserId);
        localStorage.setItem(LOGIN_USER_TOKEN, nextProps.loginToken);
      } else {
        message.error('登陆出错，请重试');
      }
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.isLogin) {
      this.props.fetchLoginUser();
      // browserHistory.push('/');
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="container">
        <h1>登陆</h1>
        <form method="post" onSubmit={this.handleSubmit.bind(this)}>
          <div className="formGroup " style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label" htmlFor="usernameOrEmail">用户名/邮箱:</label>
            {/* 用户名和密码的初次校验 */}
            <Input placeholder="请输入用户名或邮箱" type="text" size="large" name="usernameOrEmail" autoFocus onChange={this.handleChange} />
            {this.state.showUeTip ? (<span className="tip">{this.state.ueTip}</span>) : (<span />)}
          </div>
          <div className="formGroup " style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label" htmlFor="password">密码：</label>
            {/* 用户名和密码的初次校验  validator={ value => (/^[a-z0-9_-]{6,18}$/.test(value) ? {show: false} : {show: true, error: '密码至少为6位'}) }*/}
            <Input placeholder="请输入密码" type="password" size="large" name="password" onChange={this.handleChange} />
            {this.state.showPwdTip ? (<span className="tip">{this.state.pwdTip}</span>) : (<span />)}
          </div>
          <div className="formGroup">
            <span style={{ float: 'right', marginBottom: '10px' }}>忘记密码？<Link to="/find-pwd">去找回</Link></span>
          </div>
          <div className="formGroup">
            <Button className="button" size="large" type="primary" htmlType="submit">登陆</Button>
          </div>
        </form>
        <div>
          <span>还没有账号，<Link to="/register">去注册</Link></span>
        </div>
      </div>
    );
  }

  static propTypes = {
    onSubmit: PropTypes.func,
    isLogin: PropTypes.bool,
    loginInfo: PropTypes.object,
    fetchLoginUser: PropTypes.func,
    status: PropTypes.number,
    loginUserId: PropTypes.number,
    loginToken: PropTypes.string
  };
}

export default Login;

// const mapStateToProps = state => {
//   return {
//     isLogin: state.users.isLogin,
//     loginInfo: state.users.loginInfo,
//     status: state.users.status,
//     loginUserId: state.users.loginUserId,
//     loginToken: state.users.loginToken
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ onSubmit: login, fetchLoginUser }, dispatch);
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Login);
