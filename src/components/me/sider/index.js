import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import './index.css';

const SubMenu = Menu.SubMenu;

class Sider extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <aside className="layout-sider">
        <Menu mode="inline" selectedKeys={[ this.props.selectedKey ]}
            defaultSelectedKeys={[ 'myInfo' ]}
            style={{ width: 200 }}
            defaultOpenKeys={['sub1', 'sub2', 'sub4', 'mySetting']} >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>个人中心</span></span>}>
            <Menu.Item key="myInfo">
              <Link to="/me">我的信息</Link>
            </Menu.Item>
            <Menu.Item key="myOrder">
              <Link to="/me/myOrder">我的订单</Link>
            </Menu.Item>
            <Menu.Item key="myStar">
              <Link to="/me/myStar">我的收藏</Link>
            </Menu.Item>
            <Menu.Item key="my-enroll-info">
              <Link to="/me/my-enroll-info">常用报名信息</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>比赛</span></span>}>
            <Menu.Item key="my-cmpt">
              <Link to="/me/my-cmpt">我的赛事</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="cloud-upload" /><span>我发布的</span></span>}>
            <Menu.Item key="my-article">
              <Link to="/me/my-article">文章</Link>
            </Menu.Item>
            <Menu.Item key="myTopic">
              <Link to="/me/myTopic">话题</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="mySetting" title={<span><Icon type="setting" /><span>设置</span></span>}>
            <Menu.Item key="modifyPwd">
              <Link to="/me/modifyPwd">修改密码</Link>
            </Menu.Item>
            <Menu.Item key="user-phone">手机号码绑定</Menu.Item>
            <Menu.Item key="email-binding">邮箱验证</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    );
  }

  static propTypes = {
    selectedKey: PropTypes.string
  };
}

export default Sider;
