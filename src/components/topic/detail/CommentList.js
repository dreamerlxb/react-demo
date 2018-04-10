import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Pagination from 'antd/lib/pagination';
import Divider from 'antd/lib/divider';
import CommentItem from '../../common/comment/Item';

// import { FETCH_TOPIC_COMMENTS } from '../../../constants';
// import { fetchComments } from '../../../../actions/comment.action.js';

import './CommentList.css';

// 话题评论组件
class CommentList extends Component {

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
        <Divider dashed>话题评论</Divider>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          { this.props.comments.map((item, index) => <li key={index}><CommentItem comment={item}/></li>) }
        </ul>
        <Pagination style={{ margin: '10px 0', padding: '10px 0'}}
          total={this.props.topicCommentCount}
          onChange={(page, pageSize) => this.fetchTopicComments(page - 1, pageSize)}/>
      </div>
    );
  }

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
      {id: 0, title: 'This is a comment title !!!', user: {id: 1} },
      {id: 1, title: 'This is a comment title !!!', user: {id: 2}},
      {id: 2, title: 'This is a comment title !!!', user: {id: 3}},
      {id: 3, title: 'This is a comment title !!!', user: {id: 4}},
      {id: 4, title: 'This is a comment title !!!', user: {id: 5}},
      {id: 5, title: 'This is a comment title !!!', user: {id: 6}},
    ]
  };
}
export default CommentList;

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
