import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import Menu from 'antd/lib/menu';
import Modal from 'antd/lib/modal';
import logo from '../../logo.svg';

import me from './meUnauth.png';
import './index.css';
import './nav.less';

const Item = Menu.Item;
const SubMenu = Menu.SubMenu;
const confirm = Modal.confirm;

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.handleMenuSelect = this.handleMenuSelect.bind(this);
        this.judgeLogin = this.judgeLogin.bind(this);
    }

    handleMenuSelect(data) {
        this.setState({ currentItem: data.key });
        if (data.key === 'logout') {
            const _me = this;
            confirm({
                title: '确定要退出吗?',
                onOk() {
                    _me.props.logout();
                },
                onCancel() { }
            });
        }
    }

    componentDidMount() {
        const { location } = this.props;
        console.log('header', location);
        if (location) {
            const paths = location.pathname.split('/');
            this.setState({
                current: paths[paths.length - 1],
            });
        }
    }

    /**
     * 判断是否登陆
     */
    judgeLogin() {
        if (this.props.isLogin) {
            const title = (
                <Link className="nav-link" to="/me">
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                        {<img alt="" src={this.props.loginUser && this.props.loginUser.avatar ? this.props.loginUser.avatar.url : me} width="30" height="30" />}
                        &nbsp;&nbsp;&nbsp;
                        {this.props.loginUser ? this.props.loginUser.name : ''}
                    </span>
                </Link>
            );
            return (
                <SubMenu className="ant-menu-item menuItem subMenu" title={title} key="login-user">
                    <Item key="myInfo">
                        <Link to="/me">个人中心</Link>
                    </Item>
                    <Item key="logout">安全退出</Item>
                </SubMenu>
            );
        }

        return (
            <Item className="menuItem" key="login">
                <Link className="nav-link" to="/login" style={{ display: 'flex', alignItems: 'center' }}>
                    <img alt="user" src={me} width="30" height="30" />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span>登陆</span>
                </Link>
            </Item>
        );
    }

    render() {
        return (
            <div className="header1 app-header">
                <div className={`${this.props.className}-logo `}>
                    <img src={logo} className="app-logo" alt="logo" />
                </div>
                {/* <div className="nav"> */}
                    <Menu mode="horizontal" className="nav"
                        onClick={this.handleClick}
                        selectedKeys={[ this.state.current ]} defaultSelectedKeys={['home']} onSelect={this.handleMenuSelect}>
                        <Item className="menuItem" key="home">
                            <Link to="/" className="nav-link">首页</Link>
                        </Item>
                        <Item className="menuItem" key="charts">
                            <Link to="/charts" className="nav-link">图表</Link>
                        </Item>
                        <Item className="menuItem" key="score">
                            <Link to="/score" className="nav-link">成绩</Link>
                        </Item>
                        <Item className="menuItem" key="article">
                            <Link to="/article" className="nav-link">文章</Link>
                        </Item>
                        <Item className="menuItem" key="topic">
                            <Link to="/topic" className="nav-link">话题</Link>
                        </Item>
                        {/* <SubMenu className="ant-menu-item menuItem subMenu" title={<Link to="/racer-say" className="nav-link">赛客说</Link>} key="racer-say"></SubMenu> */}
                        {this.judgeLogin()}
                    </Menu>
                {/* </div> */}
            </div>
        );
    }

    state = {
        current: 'home'
    };

    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }

    static propTypes = {
        className: PropTypes.string,
        isLogin: PropTypes.bool,
        logout: PropTypes.func,
        loginUser: PropTypes.object,
        logoutInfo: PropTypes.object // 如果退出时出错了，那么错误信息为logoutInfo
    };

    static defaultProps = {
        className: 'header1',
        isLogin: false
    };
}

export default withRouter(Header);
