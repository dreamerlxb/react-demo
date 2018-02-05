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

class ArticleDetail extends Component {

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.comment && nextProps.comment.articleId === this.props.article.id) {
  //     message.success('评论成功');
  //   }
  // }

  // componentWillMount() {
  //   const userId = localStorage.getItem(LOGIN_USER_ID);
  //   this.props.fetchArticle(this.props.params.articleId, { // eslint-disable-line
  //     include: [
  //       'image',
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
  //   this.props.fetchCount('Collections', FETCH_ARTICLE_C_COUNT, { articleId: this.props.params.articleId }); // eslint-disable-line
  //   this.props.fetchCount('Praises', FETCH_ARTICLE_P_COUNT, { articleId: this.props.params.articleId }); // eslint-disable-line
  //   this.props.fetchCount('Comments', FETCH_ARTICLE_COMMENT_COUNT, { articleId: this.props.params.articleId }); // eslint-disable-line
  // }

  render() {
    const articleId = +this.props.params.articleId; // eslint-disable-line
    return (
      <div className="article-detail-info">
        <Header article={this.props.article}
          articleCollectCount={this.props.articleCollectCount}
          articlePraiseCount={this.props.articlePraiseCount}
          articleCommentCount={this.props.articleCommentCount}
          praise={this.props.praise}
          collection={this.props.collection}
          toggle={ (modelName, type, typeId, marked) => this.props.toggle(modelName, type, { typeId, marked, type: 'article' })}/>
        <form className="article-comment" onSubmit={this.handleSubmit}>
          <Input placeholder="文章评论"
            size="large"
            maxLength="140"
            name="content"
            type="textarea"
            autosize={{minRows: 4, maxRows: 4}}/>
          <span className="content_num">140字</span>
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
    articleCollectCount: PropTypes.number,
    articleCommentCount: PropTypes.number,
    articlePraiseCount: PropTypes.number
  };

  static defaultProps = {
    article: {
      create: '',
      content: ''
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
