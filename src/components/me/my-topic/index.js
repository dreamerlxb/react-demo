import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import Item from './Item';
// import { fetchTopics, delTopic } from '../../../actions/topics.action';
// import { LOGIN_USER_ID } from '../../../constants';

import './index.css';

class MyTopic extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  componentWillMount() {
    // const userId = localStorage.getItem(LOGIN_USER_ID);
    // this.props.fetchTopics({
    //   where: { userId },
    //   include: [
    //     'images',
    //     {
    //       relation: 'user',
    //       scope: { include: 'avatar'}
    //     }
    //   ],
    //   order: 'created DESC',
    //   limit: 10,
    //   skip: 0
    // }); // 获取登陆用户的报名信息
  }

  renderOptions() {
    // if (this.props.delStatus) { // 说明删除成功
    //   this.props.fetchTopics({include: ['images', {relation: 'user', scope: { include: 'avatar'}}], order: 'created DESC', limit: 10, skip: 0}); // 获取登陆用户的报名信息
    // }
    return this.props.topics.map(item => (<Item key={item} item={item} delTopic={ this.props.delTopic } />));
  }

  render() {
    return (
      <div>
        <div className="topic-list-header">
          <h4>我发布的话题</h4>
        </div>
        <div className="topic-list">
          { this.renderOptions() }
        </div>
      </div>
    );
  }

  static propTypes = {
    fetchTopics: PropTypes.func,
    topics: PropTypes.array,
    delTopic: PropTypes.func,
    delStatus: PropTypes.bool
  };

  static defaultProps = {
    topics: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  };
}

export default MyTopic;
// const mapStateToProps = (state) => { // 登陆用户的所有报名信息
//   return { topics: state.topics.all, delStatus: state.topics.delStatus };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ fetchTopics, delTopic }, dispatch);
// };
// export default connect(mapStateToProps, mapDispatchToProps)(MyTopic);
