import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
// import message from 'antd/lib/message';
// import { LOGIN_USER_ID, LOGIN_USER_TOKEN } from '../../../constants';
// import { setPwd } from '../../../actions/users.action.js';
import './index.css';

const FormItem = Form.Item;
// const userId = localStorage.getItem(LOGIN_USER_ID);

class ModifyPwd extends Component {

  static propTypes= {
    setPwd: PropTypes.func,
    setPwdInfo: PropTypes.object,
    user: PropTypes.object
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.setPwdInfo && nextProps.setPwdInfo.success && nextProps.setPwdInfo.statusCode === 200) {
  //     // 设置密码成功
  //     localStorage.setItem(LOGIN_USER_TOKEN, nextProps.setPwdInfo.tokenId);
  //     message.success('密码修改成功');
  //   }
  // }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {  // eslint-disable-line
      if (!err) {
        // const email =  this.props.user.email;
        // this.props.setPwd({ ...values, id: userId, email });
        console.log('Received values of form: ', values);
      }
    });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;  // eslint-disable-line
    if (value && value !== form.getFieldValue('newPwd')) {
      callback('两次密码不一致');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;  // eslint-disable-line
    if (value ) {
      form.validateFields(['confirmPwd'], { force: true });
    }
    callback();
  }

  render() {
    const { getFieldDecorator } = this.props.form; // eslint-disable-line
    const formItemLayout = {
      labelCol: { span: 6, offset: 0 },
      wrapperCol: { span: 14, offset: 0 }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 14,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 3
        }
      }
    };
    return (
      <Form className="find-pwd-container" onSubmit={this.handleSubmit} layout="vertical">
        <FormItem {...tailFormItemLayout}>
          <h3>重置密码</h3>
        </FormItem>
        <FormItem {...formItemLayout} label="旧密码" hasFeedback>
          {
            getFieldDecorator('oldPwd', {
              rules: [{
                required: true, message: '旧密码不能为空'
              }]
            })(<Input type="password"/>)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="新密码" hasFeedback>
          {
            getFieldDecorator('newPwd', {
              rules: [{
                required: true, message: '新密码不能为空'
              }, {
                min: 6, message: '密码至少6位'
              }, {
                max: 16, message: '密码至多16位'
              }, {
                validator: this.checkConfirm
              }]
            })(<Input type="password" />)
          }
        </FormItem>
        <FormItem {...formItemLayout} label="确认新密码" hasFeedback>
          {
            getFieldDecorator('confirmPwd', {
              rules: [{
                required: true, message: '新密码不能为空'
              }, {
                validator: this.checkPassword
              }]
            })(<Input type="password" />)
          }
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">修改</Button>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(ModifyPwd);

// const mapStateToProps = (state, ownProps) => {
//   return {
//     setPwdInfo: state.users.setPwdInfo,
//     user: state.users.loginUser
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ setPwd }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(ModifyPwd));
