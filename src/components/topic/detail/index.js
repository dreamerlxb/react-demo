import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {Input, Button,message} from 'antd';

import CommentList from './CommentList.js';
import Header from './Header.js';
// import { fetchCount } from '../../../../actions/common.action.js';
// import { createComment, fetchComments } from '../../../../actions/comment.action.js';
// import { fetchTopic } from '../../../../actions/topics.action';
// import { toggle } from '../../../../actions/common.action.js';
import { LOGIN_USER_ID } from '../../../constants';
import './index.css';

const { TextArea } = Input;

class TopicDetail extends Component {

  // componentWillMount() {
  //   const userId = localStorage.getItem(LOGIN_USER_ID);
  //   this.props.fetchTopic(this.props.params.topicId, {  // eslint-disable-line
  //     include: [
  //       'images',
  //       {
  //         relation: 'user',
  //         scope: { include: 'avatar' }
  //       }, {
  //         relation: 'collections',
  //         scope: { where: { userId } }
  //       }, {
  //         relation: 'praises',
  //         scope: { where: { userId } }
  //       }
  //     ]
  //   });
  //   this.props.fetchCount('Collections', FETCH_TOPIC_C_COUNT, { topicId: this.props.params.topicId }); // eslint-disable-line
  //   this.props.fetchCount('Praises', FETCH_TOPIC_P_COUNT, { topicId: this.props.params.topicId }); // eslint-disable-line
  //   this.props.fetchCount('Comments', FETCH_TOPIC_COMMENT_COUNT, { topicId: this.props.params.topicId }); // eslint-disable-line
  // }

  render() {
    const topicId = +this.props.match.params.topicId;// eslint-disable-line
    return (
      <div>
        <Header topicCollectCount={this.props.topicCollectCount}
          topicPraiseCount={this.props.topicPraiseCount}
          topicCommentCount={this.props.topicCommentCount}
          topic={this.props.topic}
          praise={this.props.praise}
          collection={this.props.collection}
          toggle={(modelName, type, typeId, marked) => this.props.toggle(modelName, type, { typeId, marked, type: 'topic' })} />
        <form className="article-comment" onSubmit={this.handleSubmit}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <TextArea placeholder="文章评论"
              size="large"
              maxLength="140"
              name="content"
              autosize={{ minRows: 3, maxRows: 3 }} />
            <span className="content-num">140字</span>
          </div>
          <Button size="large" htmlType="submit" type="primary">提交评论</Button>
        </form>
        {<CommentList topicCommentCount={this.props.topicCommentCount} topicId={topicId} />}
      </div>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const userId = localStorage.getItem(LOGIN_USER_ID);
    if (!userId) {
      message.info('请先登录');
      return;
    }
    const form = e.target;
    const content = form.content.value;
    if (content.length === 0) {
      message.info('评论不能为空');
      return;
    }
    this.props.createComment({
      content,
      topicId: this.props.topic.id,
      userId
    });
  };

  static propTypes = {
    fetchTopic: PropTypes.func,
    toggle: PropTypes.func,
    createComment: PropTypes.func,
    fetchComments: PropTypes.func,
    topic: PropTypes.object,
    collection: PropTypes.object,
    praise: PropTypes.object,
    topicCollectCount: PropTypes.number,
    topicPraiseCount: PropTypes.number,
    topicCommentCount: PropTypes.number
  };

  static defaultProps = {
    topic: {
      create: '',
      content: ''
    },
    topicCommentCount: 20
  };
}

export default TopicDetail;

// const mapStateToProps = (state, ownProps) => {
//   const topic = state.topics.topic;
//   const comment = state.comments.comment;
//   return {
//     topic: topic && topic.id === +ownProps.params.topicId ? topic : {},
//     topicPraiseCount: state.praises.topicPraiseCount,
//     praise: state.praises.topicPraise,
//     topicCollectCount: state.collections.topicCollectCount,
//     collection: state.collections.topicCollection,
//     topicCommentCount: state.comments.topicCommentCount,
//     comment: comment && comment.topicId === +ownProps.params.topicId ? comment : null
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ fetchTopic, createComment, fetchCount, fetchComments, toggle }, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(TopicDetail);
