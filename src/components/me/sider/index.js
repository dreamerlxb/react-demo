import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router'
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';

import './index.css';

const SubMenu = Menu.SubMenu;

class Sider extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    const { location } = this.props;
    //console.log('sider match = ', match);
    console.log('sider location = ', location);
    if(location) {
      const paths = location.pathname.split('/');
      this.setState({
        current: paths[paths.length - 1],
      });
    }
  }

  render() {
    return (
      <aside className="layout-sider">
        <Menu mode="inline" selectedKeys={[ this.state.current ]}
            defaultSelectedKeys={[ 'myInfo' ]}
            style={{ width: 200 }}
            onClick={this.handleClick}
            defaultOpenKeys={['sub1', 'sub2', 'sub4', 'mySetting']} >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>个人中心</span></span>}>
            <Menu.Item key="myInfo">
              <NavLink to="/me" exact>我的信息</NavLink>
            </Menu.Item>
            <Menu.Item key="myOrder">
              <NavLink to="/me/myOrder" exact>我的订单</NavLink>
            </Menu.Item>
            <Menu.Item key="myStar">
              <NavLink to="/me/myStar" exact>我的收藏</NavLink>
            </Menu.Item>
            <Menu.Item key="my-enroll-info">
              <NavLink to="/me/my-enroll-info" exact>常用报名信息</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>比赛</span></span>}>
            <Menu.Item key="my-cmpt">
              <NavLink to="/me/my-cmpt" exact>我的赛事</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="cloud-upload" /><span>我发布的</span></span>}>
            <Menu.Item key="myArticle">
              <NavLink to="/me/myArticle" exact >文章</NavLink>
            </Menu.Item>
            <Menu.Item key="myTopic">
              <NavLink to="/me/myTopic" exact >话题</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu key="mySetting" title={<span><Icon type="setting" /><span>设置</span></span>}>
            <Menu.Item key="modifyPwd">
              <NavLink to="/me/modifyPwd" exact >修改密码</NavLink>
            </Menu.Item>
            <Menu.Item key="user-phone">手机号码绑定</Menu.Item>
            <Menu.Item key="email-binding">邮箱验证</Menu.Item>
          </SubMenu>
        </Menu>
      </aside>
    );
  }

  // handleNavClick = event => {
  //   console.log('nav event', event);
  // }
    
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  state = {
    current: 'myInfo',
  }

  static propTypes = {
    selectedKey: PropTypes.string
  };
}

export default withRouter(Sider);
// export default Sider;
