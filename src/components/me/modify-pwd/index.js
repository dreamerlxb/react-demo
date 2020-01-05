import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {Form, Input, Button} from 'antd';
// import message from 'antd/lib/message';
// import { LOGIN_USER_ID, LOGIN_USER_TOKEN } from '../../../constants';
// import { setPwd } from '../../../actions/users.action.js';
import './index.css';

const FormItem = Form.Item;
// const userId = localStorage.getItem(LOGIN_USER_ID);

class ModifyPwd extends Component {

  static propTypes = {
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
  formRef = React.createRef();

  onFinish = values => {
    console.log('Received values of form: ', values);
  };

  onFinishFailed = ({ errorFields }) => {
    this.formRef.scrollToField(errorFields[0].name);
  };

  // handleSubmit = e => {
  //   e.preventDefault();
  //   this.props.form.validateFieldsAndScroll((err, values) => {  // eslint-disable-line
  //     if (!err) {
  //       // const email =  this.props.user.email;
  //       // this.props.setPwd({ ...values, id: userId, email });
  //       console.log('Received values of form: ', values);
  //     }
  //   });
  // };

  render() {
    // const { getFieldDecorator } = this.props.form; // eslint-disable-line
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
      <Form ref={this.formRef} className="find-pwd-container"
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
            layout="vertical">
        <FormItem {...tailFormItemLayout}>
          <h3>重置密码</h3>
        </FormItem>
        <FormItem {...formItemLayout} label="旧密码" hasFeedback name="oldPassword"
                  rules={[{
                    required: true, message: '旧密码不能为空'
                  }]}>
          <Input.Password />
        </FormItem>
        <FormItem {...formItemLayout} label="新密码" name="newPassword"
                  rules={[{
                    required: true, message: '新密码不能为空'
                  }, {
                    min: 6, message: '密码至少6位'
                  }, {
                    max: 16, message: '密码至多16位'
                  }]}
                  hasFeedback>
          <Input.Password />
        </FormItem>
        <FormItem {...formItemLayout} label="确认新密码" name="confirmPwd"
                  dependencies={['newPassword']}
                  rules={
                    [{
                      required: true, message: '新密码不能为空'
                    },
                      ({ getFieldValue }) => ({
                        validator(rule, value) {
                          if (!value || getFieldValue('newPassword') === value) {
                            return Promise.resolve();
                          }

                          return Promise.reject('两次密码不一致!');
                        },
                      })]
                  }
                  hasFeedback>
          <Input.Password />
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" size="large">修改</Button>
        </FormItem>
      </Form>
    );
  }
}

export default ModifyPwd;

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
