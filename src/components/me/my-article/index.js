import React from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchArticles, delArticle } from '../../../actions/articles.action';
import Item from './Item.js';
// import { LOGIN_USER_ID } from '../../../constants';
import './index.css';

class ArticleList extends React.Component {
  static propTypes = {
    fetchArticles: PropTypes.func,
    articles: PropTypes.array,
    delArticle: PropTypes.func,
    status: PropTypes.number
  };

  static defaultProps = {
    articles: [1, 2, 3, 4, 5, 6, 7, 8]
  };

  // constructor(props) {
  //   super(props);
  // }

  // componentWillMount() {
  //   const userId = localStorage.getItem(LOGIN_USER_ID);
  //   this.props.fetchArticles({
  //     where: {
  //       userId
  //     },
  //     include: [
  //       'image',
  //       {
  //         relation: 'user',
  //         scope: {
  //           include: 'avatar'
  //         }
  //       }
  //     ]
  //   }); // 获取登陆用户的报名信息
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.status === 300) { // 说明文章删除成功
  //     const userId = localStorage.getItem(LOGIN_USER_ID);
  //     this.props.fetchArticles({
  //       where: {
  //         userId
  //       },
  //       include: [
  //         'image',
  //         {
  //           relation: 'user',
  //           scope: {
  //             include: 'avatar'
  //           }
  //         }
  //       ]
  //     }); // 获取登陆用户的报名信息
  //   }
  // }

  renderLis() {
    if (this.props.articles) {
      return this.props.articles.map((item, index) => (<li className="my-article-list-item" key={index}><Item item={item}/></li>));
    }
    return null;
  }

  render() {
    return (
      <div className="article-list">
        <div className="article-list-header">
          <h4>我发布的文章</h4>
        </div>
        <ul>
          {this.renderLis()}
        </ul>
      </div>
    );
  }
}

export default ArticleList;

// const mapStateToProps = (state) => { // 登陆用户的所有报名信息
//   return { articles: state.articles.all, status: state.articles.status };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ fetchArticles, delArticle }, dispatch);
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
