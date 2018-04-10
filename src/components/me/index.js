import React from 'react';
// import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Sider from './sider';
import MyInfo from './my-info';
import MyTopic from './my-topic';
import MyOrder from './my-order';
import MyStar from './my-star';
import MyArticle from './my-article';
import ModifyPwd from './modify-pwd';
import NotFound from '../notFound';
import './index.css';

class Me extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedKey: 'my-info'
  //   };
  // }

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (!nextProps.isLogin || (nextProps.loginInfo && nextProps.loginInfo.status !== 200)) {
  //     // browserHistory.push('/login');
  //     return false; // 说明未登录， 那么直接跳转 不更新
  //   }
  //   return true;
  // }

  render() {
    const { match } = this.props;
    console.log('url========>>>>>> ', match.url);
    return (
      <div className="me-container" style={{display: 'flex'}}>
        <Sider />
        <div className="me-content" style={{flexGrow: '1'}}>
          <Switch>
            <Route exact path='/me' component={MyInfo} />
            <Route path="/me/myOrder" exact component={ MyOrder }/>
            <Route path="/me/myTopic" exact component={ MyTopic } />
            <Route path="/me/myArticle" exact component={MyArticle}/>
            <Route path="/me/myStar" exact component={MyStar}/>
            <Route path="/me/modifyPwd" exact component={ModifyPwd}/>
            <Route exact component={ NotFound } />
          </Switch>
        </div>
      </div>
    );
  }

  // static propTypes = {
  //   children: PropTypes.element
  // };
}

export default Me;

// const mapStateToProps = (state) => { // 登陆用户的所有报名信息
//   return {
//     isLogin: state.users.isLogin,
//     loginInfo: state.users.loginInfo
//   };
// };

// // const mapDispatchToProps = (dispatch, ownProps) => {
// //   return bindActionCreators({ fetchTopics, delTopic }, dispatch);
// // };
// export default connect(mapStateToProps)(Me);
