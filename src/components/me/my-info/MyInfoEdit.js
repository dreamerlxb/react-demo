import React from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input';
import Select from 'antd/lib/select';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';
import Progress from 'antd/lib/progress';
// import BASE_URL, { LOGIN_USER_ID, QINIU_URL } from '../../../constants';
import me from '../../header/meUnauth.png';
// import { setAvatar } from '../../../actions/index.js';
import { phoneRegExp, emailRegExp } from '../../../constants/RegExp';
import './index.css';

const Option = Select.Option;
// 编辑信息
export default class MyInfoEdit extends React.Component {

  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      gender: props.user.gender,
      showProgress: false,
      uploadPercent: 0
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    if (name.length === 0) {
      return;
    }
    const gender = form.gender.value;

    const mobileNumber = form.mobileNumber.value;
    if (mobileNumber.length === 0) {
      message.error('手机号不能为空');
      return;
    }
    if (!phoneRegExp.test(mobileNumber)) { // 手机验证
      message.error('手机号格式不正确');
      return;
    }

    const email = form.email.value;
    if (email.length === 0) {
      message.error('邮箱不能为空');
      return;
    }
    if (!emailRegExp.test(email)) { // 手机验证
      message.error('邮箱格式不正确');
      return;
    }

    this.props.modifyUserInfo({...this.props.user, name, gender, mobileNumber, email});
  }

  render() {
    return (
			<div className="info-form">
        <div className="info-title">
          <a href="javascript:;" onClick={this.props.onBackClick} className="info-title-edit" style={{cursor: 'pointer'}}>返回</a>
          基本资料
        </div>
        <div className="user-info-avatar">
          <label>头像</label>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img alt="" id="mypickfile" src={ this.props.user.avatar ? this.props.user.avatar.url : me }/>
            <span>点击图片选择头像</span>
          </div>
          {
            this.state.showProgress ? <Progress percent={this.state.uploadPercent} status="active" style={{width: '50%', flexGrow: 1}}/> : null
          }
        </div>
        <div className="info-detail">
          <form onSubmit={ this.handleSubmit }>
            <div className="info-form-item">
              <label htmlFor="name">昵称</label>
              <Input size="large" type="text" name="name" placeholder="用户昵称" defaultValue={ this.props.user.name }/>
            </div>
            <div className="info-form-item">
              <label>性别</label>
              <input type="hidden" value={this.state.gender} name="gender"/>
              <Select style={{width: '300px'}} size="large" defaultValue={ this.props.user.gender == '1' ? '男' : '女' } onChange={ value => this.setState({gender: value})}>
                <Option value="1">男</Option>
                <Option value="0">女</Option>
              </Select>
            </div>
            <div className="info-form-item">
              <label htmlFor="mobileNumber">手机</label>
              <Input size="large" type="text" name="mobileNumber" placeholder="手机" defaultValue={ this.props.user.mobileNumber }/>
            </div>
            <div className="info-form-item">
              <label htmlFor="email">联系邮箱</label>
              <Input size="large" type="text" name="email" placeholder="联系邮箱" defaultValue={ this.props.user.email }/>
            </div>
            <div className="info-form-item">
              <Button type="primary" htmlType="submit" size="large" style={{width: '200px'}}>保存</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  static propTypes = {
    onBackClick: PropTypes.func,
    user: PropTypes.object,
    modifyUserInfo: PropTypes.func,
    fetchLoginUser: PropTypes.func
  };
}
