import React from 'react';
import PropTypes from 'prop-types';

import {Checkbox, Input, Button, message} from 'antd';

import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { register } from '../../actions/users.action.js';
import { emailRegExp, pwdRegExp, usernameRegExp } from '../../constants/RegExp';
import './index.css';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.checkUsername = this.checkUsername.bind(this);
    this.checkEmail = this.checkEmail.bind(this);
    this.checkPwd = this.checkPwd.bind(this);
    this.checkCPwd = this.checkCPwd.bind(this);
    this.state = {
      unTip: { show: false },
      pwdTip: { show: false },
      emailTip: { show: false },
      cpwdTip: { show: false }
    };
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    onSubmit: PropTypes.func,
    status: PropTypes.number,
    registerOk: PropTypes.bool,
    registerInfo: PropTypes.object // 是否注册成功
  };

  static defaultProps = {
    title: '注册'
  };

  /**
   * 处理form表单处理数据
   */
  handleSubmit = e => {
    e.preventDefault();
    const un = e.target.username.value;
    const email = e.target.email.value;
    const pwd = e.target.password.value;
    const cpwd = e.target.confirmPassword.value;
    if (this.checkUsername(un) &&
          this.checkEmail(email) &&
          this.checkPwd(pwd) &&
          this.checkCPwd(cpwd)) {
      this.props.onSubmit({ username: un, email, password: pwd });
    }
  }

  checkUsername(value) {
    if (value.length === 0) {
      this.setState({unTip: { show: true, text: '用户名不能为空' }});
      return false;
    }
    if (!(usernameRegExp.test(value))) {
      this.setState({unTip: { show: true, text: '用户名3~16位' }});
      return false;
    }
    this.setState({unTip: { show: false }});
    return true;
  }

  checkEmail(value) {
    if (value.length === 0) {
      this.setState({emailTip: { show: true, text: '邮箱不能为空' }});
      return false;
    }
    if (!emailRegExp.test(value)) {
      this.setState({emailTip: { show: true, text: '邮箱格式不正确' }});
      return false;
    }
    this.setState({emailTip: { show: false }});
    return true;
  }

  checkPwd(value) {
    this.password = value;
    if (value.length === 0) {
      this.setState({pwdTip: { show: true, text: '密码不能为空' }});
      return false;
    }
    if (!pwdRegExp.test(value)) {
      this.setState({pwdTip: { show: true, text: '密码6~18位' }});
      return false;
    }
    this.setState({pwdTip: { show: false }});
    return true;
  }

  checkCPwd(value) {
    if (value === this.password) {
      this.setState({cpwdTip: { show: false }});
      return true;
    }
    this.setState({cpwdTip: { show: true, text: '两次密码不一致' }});
    return false;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.status === 601) {
      if (!nextProps.registerOk && nextProps.registerInfo.status === 422) {
        message.warning('用户名或邮箱已存在');
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.status === 601 && nextProps.registerOk) {
      // browserHistory.push('/login');
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.title}</h1>
        <form method="post"  onSubmit={this.handleSubmit}>
          <div className="formGroup">
            <label className="label" htmlFor="username">用户名:</label>
            <Input className="input" type="text" size="large" placeholder="用户名"
               name="username" autoFocus onChange={ e => this.checkUsername(e.target.value) }/>
            { this.state.unTip.show ? <span className="tip" >*{ this.state.unTip.text }</span> : <span /> }
          </div>
          <div className="formGroup">
            <label className="label" htmlFor="email">邮箱:</label>
            <Input className="input" type="text" name="email" size="large"
               placeholder="邮箱" onChange={ e => this.checkEmail(e.target.value) }/>
            { this.state.emailTip.show ? <span className="tip" >*{ this.state.emailTip.text }</span> : <span /> }
          </div>
          <div className="formGroup">
            <label className="label" htmlFor="password"> 密码:</label>
            <Input className="input" type="password" name="password" size="large"
               placeholder="密码" onChange={ e => this.checkPwd(e.target.value) }/>
            { this.state.pwdTip.show ? <span className="tip" >*{ this.state.pwdTip.text }</span> : <span /> }
          </div>
          <div className="formGroup">
            <label className="label" htmlFor="confirmPassword">确认密码:</label>
            <Input className="input" type="password" name="confirmPassword" size="large"
               placeholder="确认密码" onChange={ e => this.checkCPwd(e.target.value) }/>
            { this.state.cpwdTip.show ? <span className="tip" >*{ this.state.cpwdTip.text }</span> : <span /> }
          </div>
          <div className="formGroup"  style={{textAlign: 'left', paddingTop: '30px'}}>
            <Checkbox initialValue="true">我已阅读 <a href="javascript;">XXXXXX协议</a></Checkbox>
          </div>
          <div className="formGroup">
            <Button className="button" htmlType="submit" type="primary" size="large">注册</Button>
          </div>
        </form>
        <div style={{ textAlign: 'right'}}>
          <span>已有账号，<Link to="login">返回登陆</Link></span>
        </div>
      </div>
    );
  }
}
export default Register;

// const mapStateToProps = (state) => {
//   return {
//     registerInfo: state.users.registerInfo,
//     status: state.users.status,
//     registerOk: state.users.registerOk
//   };
// };


// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ onSubmit: register }, dispatch);
// };

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Register);
