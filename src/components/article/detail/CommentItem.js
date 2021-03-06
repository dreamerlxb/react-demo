import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
import message from 'antd/lib/message';
// import { createReply, fetchReplies } from '../../../../actions/replies.action.js';
// import { fetchComment } from '../../../../actions/comment.action.js';
import { LOGIN_USER_ID, FETCH_REPLIES } from '../../../constants';

import me from '../../header/meUnauth.png'
import './CommentItem.css';

class CommentItem extends React.Component {

  renderReplies() {
    // let repliesArr = this.props.comment.replies;
    if (!this.props.comment.replies) {
      return;
    }
    return this.props.comment.replies.map((item, index) => {
      return (
        <li key={index}>
          <span>
            <em>{item.user.name}</em>&nbsp;&nbsp;回复&nbsp;&nbsp;<em>{item.replyTo.name}</em>&nbsp;:&nbsp;{item.content}
          </span>
          <Button type="link" onClick={() => this.setState({ reply: !this.state.reply, replyTo: item.user })}>回复</Button>
        </li>
      );
    });
  }

  renderReplyDiv() {
    if (this.state.reply) {
      return (
        <form className="article-comment" onSubmit={this.handleSubmit}>
          <input type="hidden" value={2} name="toUserId" />
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <Input placeholder={this.state.replyTo ? `回复${this.state.replyTo.name}` : '回复评论'}
              size="large"
              maxLength="100"
              name="content"
              type="textarea"
              autosize={{ minRows: 2, maxRows: 2 }} />
            <span className="content-num">100字</span>
          </div>
          <Button size="large" type="primary" htmlType="submit">提交回复</Button> &nbsp;&nbsp;&nbsp;&nbsp;
          <Button size="large" type="primary" onClick={() => this.setState({ reply: false })}>取消</Button>
        </form>
      );
    }
    return null;
  }
  render() {
    return (
      <div className="comment-item">
        <div className="comment-item-user">
          <div className="commain_userimg">
            <img src={me} alt="User avatar" />
          </div>
          <div className="comment-usernam">
            <p className="pname">Comment user name</p>
            <p className="ptime">{moment().format('YYYY-MM-DD HH:mm:ss')}</p>
          </div>
          <div style={{ flexGrow: 1 }} />
          <div className="comment-item-op">
            <span style={{ width: 10 }} />
            <Button type="link" className="comment-replybtn"
                    onClick={() => this.setState({ reply: !this.state.reply, replyTo: null })}>回复</Button>
          </div>
        </div>
        <div className="commain_con">
          <p> Comment content </p>
          <ul className="comment-replies-list">
            {this.renderReplies()}
          </ul>
        </div>
        {this.renderReplyDiv()}
      </div>
    );
  }

  fetchReplies = () => {
    this.props.fetchReplies(FETCH_REPLIES, {
      where: {
        commentId: this.props.comment.id
      },
      include: [{
        relation: 'user',
        scope: {
          fields: {
            name: true
          }
        }
      }, {
        relation: 'replyTo',
        scope: {
          fields: {
            name: true
          }
        }
      }],
      order: 'created ASC',
      skip: 0,
      limit: 10
    });
  };

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
    this.props.createReply({
      content,
      commentId: this.props.comment.id,
      userId,
      toUserId: this.state.replyTo ? this.state.replyTo.id : this.props.comment.userId
    });
  };

  state = {
    reply: false,
    replyTo: null
  };

  static propTypes = {
    comment: PropTypes.object,
    reply: PropTypes.object,
    createReply: PropTypes.func,
    fetchReplies: PropTypes.func
  };
}

export default CommentItem;

// const mapStateToProps = (state, ownProps) => {
//   const allReplies = state.replies.all;
//   if (allReplies.length > 0) {
//     const ar = allReplies[0];
//     if (ar.commentId === ownProps.comment.id) {
//       ownProps.comment.replies = allReplies;
//       // return {
//       //   replies: allReplies,
//       //   reply: state.replies.reply,
//       //   status: state.replies.status
//       // };
//     }
//   }
//   return {
//     reply: state.replies.reply,
//     status: state.replies.status
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ createReply, fetchReplies }, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CommentItem);
