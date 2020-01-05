import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {Pagination} from 'antd';
import Item from './Item';

// import { FETCH_TOPIC_COMMENTS } from '../../../constants';
// import { fetchComments } from '../../../../actions/comment.action.js';

import './index.css';

// 话题评论组件
class List extends Component {
  static propTypes = {
    topicId: PropTypes.number,
    topicCommentCount: PropTypes.number,
    comments: PropTypes.array,
    fetchComments: PropTypes.func,
    createReply: PropTypes.func
  };

  static defaultProps = {
    topicCommentCount: 10,
    comments: [

    ]
  };

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.comment && nextProps.comment.topicId === this.props.topicId) {
  //     this.fetchTopicComments();
  //   }
  // }

  // fetchTopicComments = (page = 0, pageSize = 10) => {
  //   this.props.fetchComments(FETCH_TOPIC_COMMENTS, {
  //     where: {
  //       topicId: this.props.topicId
  //     },
  //     order: 'created DESC',
  //     skip: page * pageSize,
  //     limit: pageSize,
  //     include: {
  //       relation: 'user',
  //       scope: { include: 'avatar' }
  //     }
  //   });
  // }

  // componentWillMount() {
  //   this.fetchTopicComments();
  // }

  render() {
    return (
      <div className="topic-comment">
        <div className="topic-comment-title"> 话题评论 </div>
        <ul>
          { this.props.comments.map((item, index) => <li key={index}><Item comment={item}/></li>) }
        </ul>
        <Pagination style={{ margin: '10px 0', padding: '10px 0'}}
          total={this.props.topicCommentCount}
          onChange={(page, pageSize) => this.fetchTopicComments(page - 1, pageSize)}/>
      </div>
    );
  }
}
export default List;

// const mapStateToProps = (state, ownProps) => {
//   return {
//     comment: state.comments.comment,
//     comments: state.comments.topicComments
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ fetchComments }, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
