import React from 'react';
import PropTypes from 'prop-types';
import me from '../../header/meUnauth.png';
import './index.css';

// 展示信息
export default class MyInfoShow extends React.Component {
  static propTypes = {
    onEditClick: PropTypes.func,
    user: PropTypes.object
  };

  /* renderUserInfo() {
    if (this.props.user) {
      return (
        <div className="info-detail">
          <div className="info-form-item"><label>用户名</label><span>{ this.props.user.username }</span></div>
          <div className="info-form-item"><label>昵称</label><span>{ this.props.user.name }</span></div>
          <div className="info-form-item"><label>性别</label><span>{ this.props.user.gender == '1' ? '男' : '女' }</span></div>
          <div className="info-form-item"><label>手机</label><span>{ this.props.user.mobileNumber }</span></div>
          <div className="info-form-item"><label>联系邮箱</label><span>{ this.props.user.email }</span></div>
				</div>
      );
    }
    return null;
  }*/

  render() {
    return (
			<div className="info-form">
				<div className="info-title">基本资料
					<a href="javascript;" onClick={this.props.onEditClick} className="info-title-edit" style={{cursor: 'pointer'}}>编辑</a>
				</div>
				<div className="user-info-avatar">
					<label>头像</label>
					<div>
						<img alt="" style={{cursor: 'default'}} src={ me }/>
					</div>
				</div>
				{
          this.props.user ? (
            <div className="info-detail">
              <div className="info-form-item">
                <label>用户名</label>
                <span>{ this.props.user.username }</span>
              </div>
              <div className="info-form-item"><label>昵称</label><span>{ this.props.user.name }</span></div>
              <div className="info-form-item"><label>性别</label><span>{ this.props.user.gender === '1' ? '男' : '女' }</span></div>
              <div className="info-form-item"><label>手机</label><span>{ this.props.user.mobileNumber }</span></div>
              <div className="info-form-item"><label>联系邮箱</label><span>{ this.props.user.email }</span></div>
            </div>
          ) : null
        }
			</div>
    );
  }
}
