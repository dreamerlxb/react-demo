import React from 'react';
// import PropTypes from 'prop-types';
// import message from 'antd/lib/message';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import MyInfoShow from './MyInfo.js';
// import MyInfoEdit from './MyInfoEdit.js';
// import { modifyUserInfo, fetchLoginUser } from '../../../actions/users.action';

class MyInfo extends React.Component {
  // static propTypes = {
  //   user: PropTypes.object,
  //   status: PropTypes.number,
  //   modifyInfo: PropTypes.object,
  //   modifyUserInfo: PropTypes.func,
  //   fetchLoginUser: PropTypes.func,
  //   modified: PropTypes.bool
  // };

  render() {
    return (<div> This is my Info !!</div>);
    // if (this.state.isEdit) {
    //   return (
    //     <MyInfoEdit
    //       user={this.props.user}
    //       onBackClick={() => this.setState({ isEdit: false })}
    //       modifyUserInfo={ this.props.modifyUserInfo }
    //       fetchLoginUser={ this.props.fetchLoginUser }/>
    //   );
    // }
    // return (<MyInfoShow user={this.props.user} onEditClick={() => this.setState({isEdit: true})}/>);
  }
}

export default MyInfo;

// const mapStateToProps = (state) => {
//   const { modified, loginUser, modifyInfo, status } = state.users;
//   return { user: loginUser, modified, modifyInfo, status };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ modifyUserInfo, fetchLoginUser }, dispatch)
// });
// export default connect(mapStateToProps, mapDispatchToProps)(MyInfo);
