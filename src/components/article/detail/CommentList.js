import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import {Divider, Pagination} from 'antd';
import Item from './CommentItem';
import { FETCH_ARTICLE_COMMENTS } from '../../../constants';
// import { fetchComments } from '../../../../actions/comment.action.js';
import './CommentList.css';

class CommentList extends Component {

  render() {
    return (
      <div style={{margin: '20px 0px'}}>
        <Divider dashed>评论</Divider>
        <ul style={{listStyle: 'none', paddingLeft: 0}}>
          { this.props.comments.map((item, index) => <li key={index}><Item comment={item}/></li>) }
        </ul>
        <Pagination style={{ margin: '10px 0', padding: '10px 0'}}
          total={this.props.articleCommentCount}
          onChange={(page, pageSize) => this.fetchArticleComments(page - 1, pageSize)}/>
      </div>
    );
  }

  fetchArticleComments = (page = 0, pageSize = 10) => {
    this.props.fetchComments(FETCH_ARTICLE_COMMENTS, {
      where: {
        articleId: this.props.articleId
      },
      order: 'created DESC',
      skip: page * pageSize,
      limit: pageSize,
      include: {
        relation: 'user',
        scope: { include: 'avatar' }
      }
    });
  }

  static propTypes = {
    articleId: PropTypes.number,
    commentCount: PropTypes.number,
    comments: PropTypes.array,
    fetchComments: PropTypes.func
  };
  
  static defaultProps = {
    articleCommentCount: 20,
    comments: [
      {id: 0, title: 'This is comment title!!!'},
      {id: 1, title: 'This is comment title!!!'},
      {id: 2, title: 'This is comment title!!!'},
      {id: 3, title: 'This is comment title!!!'},
      {id: 4, title: 'This is comment title!!!'},
      {id: 5, title: 'This is comment title!!!'},
    ]
  };
}

export default CommentList;

// const mapStateToProps = (state, ownProps) => {
//   return {
//     comment: state.comments.comment,
//     comments: state.comments.articleComments
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ fetchComments }, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
