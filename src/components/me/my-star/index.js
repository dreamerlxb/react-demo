import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import { fetchModels } from '../../../actions/common.action.js';
// import {
//   LOGIN_USER_ID,
//   FETCH_ARTICLE_COLLECTIONS,
//   FETCH_TOPIC_COLLECTIONS
// } from '../../../constants';
import ArticleItem from './ArticleItem.js';
// import TopicItem from './TopicItem.js';
import './index.css';
// const userId = localStorage.getItem(LOGIN_USER_ID);

class MyStar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      status: 100,
      type: 'article'
    };
  }

  componentWillMount() {
    const match = this.props.match;
    console.log('Star location = ', match);
  }

  // fetchCollectArticles = () => {
  //   this.props.fetchModels('stars', FETCH_ARTICLE_stars, {
  //     where: { userId,  articleId: { neq: null} },
  //     include: [{
  //       relation: 'article',
  //       scope: {
  //         include: [
  //           'image',
  //           {
  //             relation: 'user',
  //             scope: { include: 'avatar' }
  //           }
  //         ]
  //       }
  //     }],
  //     order: 'created DESC',
  //     limit: 10,
  //     skip: 0
  //   }); // 获取登陆用户的报名信息
  // };

  // fetchCollectTopics = () => {
  //   this.props.fetchModels('stars', FETCH_TOPIC_stars, {
  //     where: { userId, topicId: { neq: null} },
  //     include: [{
  //       relation: 'topic',
  //       scope: {
  //         include: [
  //           'images',
  //           {
  //             relation: 'user',
  //             scope: { include: 'avatar' }
  //           }
  //         ]
  //       }
  //     }],
  //     order: 'created DESC',
  //     limit: 10,
  //     skip: 0
  //   }); // 获取登陆用户的报名信息
  // };

  // toggleTopic = e => {
  //   if (!this.props.topicstars || this.props.topicstars.length === 0) {
  //     this.fetchCollectTopics();
  //   }
  //   this.setState({ status: 101 });
  // }

  // toggleArticle = e => {
  //   if (!this.props.articlestars || this.props.articlestars.length === 0) {
  //     this.fetchCollectArticles();
  //   }
  //   this.setState({ status: 100 });
  // }
  

  renderArticleItems() {
    return this.props.stars.map(item => (<li key={item}><ArticleItem /></li>));
  }

  // renderTopicItems() {
  //   return this.props.topicstars.map(item => {
  //     if (item.topic) {
  //       return <li key={item.id}> <TopicItem topic={ item.topic }/> </li>;
  //     }
  //     return null;
  //   });
  // }

  render() {
    // const items = this.state.status === 100 ? this.renderArticleItems() : this.renderTopicItems();
    return (
      <div className="collection-form">
        <div className="ordersele">
          <a className="" >
            <span>全部</span>
          </a>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a className="" >
            <span>文章</span>
          </a>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <a className="aactive" >
            <span>话题</span>
          </a>
        </div>
        <ul class="no-list-style">
          { this.renderArticleItems() }
        </ul>
      </div>
    );
  }

  static propTypes = {
    // fetchModels: PropTypes.func,
    // articleCollections: PropTypes.array,
    stars: PropTypes.array,
    matchstars: PropTypes.array
  };

  static defaultProps = {
    stars: [1, 9, 2, 3, 4, 7, 5]
  };
}

export default MyStar;

// const mapStateToProps = (state) => { // 登陆用户的所有报名信息
//   return {
//     articleStars: state.stars.articleStars || [],
//     topicStars: state.stars.topicStars || []
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ fetchModels }, dispatch);
// };
// export default connect(mapStateToProps, mapDispatchToProps)(MyStar);
