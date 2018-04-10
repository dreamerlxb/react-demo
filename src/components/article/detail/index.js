import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
import message from 'antd/lib/message';
import Button from 'antd/lib/button';
import Input from 'antd/lib/input';
// import { connect } from 'react-redux';
import Header from './Header';
import CommentList from './CommentList';
// import { fetchArticle } from '../../../../actions/articles.action';
// import { fetchCount, toggle } from '../../../../actions/common.action';
// import { createComment, fetchComments } from '../../../../actions/comment.action.js';
import { LOGIN_USER_ID } from '../../../constants';

import './index.css';
const {TextArea} = Input;

class ArticleDetail extends Component {

  render() {
    const articleId = +this.props.match.params.topicId;// eslint-disable-line;
    // console.log(this.props.params);
    return (
      <div className="article-detail-info">
        <Header article={this.props.article}
          collectCount={this.props.collectCount}
          praiseCount={this.props.praiseCount}
          commentCount={this.props.commentCount}
          praise={this.props.praise}
          collection={this.props.collection}
          toggle={ (modelName, type, typeId, marked) => this.props.toggle(modelName, type, { typeId, marked, type: 'article' })}/>
        <form className="article-comment" onSubmit={this.handleSubmit}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            <TextArea placeholder="文章评论"
              size="large"
              maxLength="140"
              name="content"
              autosize={{minRows: 3, maxRows: 3}}/>
            <span className="content-num">140字</span>
          </div>
          <Button size="large" type="primary" htmlType="submit">提交评论</Button>
        </form>
        { <CommentList articleCommentCount={this.props.articleCommentCount} articleId={articleId}/> }
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
    const form  = e.target;
    const content = form.content.value;
    if (content.length === 0) {
      message.info('评论不能为空');
      return;
    }
    this.props.createComment({
      content,
      articleId: this.props.article.id,
      userId
    });
  }

  static propTypes = {
    fetchArticle: PropTypes.func,
    fetchCount: PropTypes.func,
    toggle: PropTypes.func,
    createComment: PropTypes.func,
    fetchComments: PropTypes.func,
    article: PropTypes.object,
    comment: PropTypes.object,
    collection: PropTypes.object,
    praise: PropTypes.object,
    collectCount: PropTypes.number,
    commentCount: PropTypes.number,
    praiseCount: PropTypes.number
  };

  static defaultProps = {
    article: {
      create: '',
      content: '',
      title: "Article Title!!!"
    }
  };
}

export default ArticleDetail;

// const mapStateToProps = (state, ownProps) => {
//   const article = state.articles.article;
//   const comment = state.comments.comment;
//   return {
//     article: article && article.id === +ownProps.params.articleId ? article : {},
//     articleCollectCount: state.collections.articleCollectCount,
//     articlePraiseCount: state.praises.articlePraiseCount,
//     articleCommentCount: state.comments.articleCommentCount,
//     comment: comment && comment.articleId === +ownProps.params.articleId ? comment : null,
//     praise: state.praises.articlePraise,
//     collection: state.collections.articleCollection
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ fetchArticle, fetchCount, createComment, fetchComments, toggle }, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ArticleDetail);
