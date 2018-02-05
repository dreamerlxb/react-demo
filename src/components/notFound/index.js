import React from 'react';
// import PropTypes from 'prop-types';
// import { Switch, Route } from 'react-router-dom';

import './index.css';

class NotFound extends React.Component {

//   static propTypes = {
//     children: PropTypes.element
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       selectedKey: 'my-info'
//     };
//   }

//   componentWillReceiveProps(nextProps) {
//     const path = nextProps.location.pathname.split('/');
//     // console.log(path);
//     const pathStr = path.pop();
//     if (pathStr === 'me') {
//       this.setState({selectedKey: 'my-info'});
//     } else {
//       this.setState({selectedKey: pathStr});
//     }
//   }

//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     if (!nextProps.isLogin || (nextProps.loginInfo && nextProps.loginInfo.status !== 200)) {
//       // browserHistory.push('/login');
//       return false; // 说明未登录， 那么直接跳转 不更新
//     }
//     return true;
//   }

  render() {
    return (<div> 404 !! </div>);
  }
}

export default NotFound;