import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Switch, Route, Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import Icon from 'antd/lib/icon';

import ArticleList from './list';
import NotFound from '../notFound';
import CreateArticle from './create';
// import { fetchTopics } from '../../../../actions/topics.action';
import './index.css';

import me from '../header/meUnauth.png'

class TopicItem extends Component {

  renderImages() {
    if (this.props.topic && this.props.topic.images) {
      return this.props.topic.images.map((item, index) => (
        <li className="topic-img-show" key={index}>
          <img src={item} alt="" />
        </li>
      ));
    }
    return null;
  }

  renderAuthor() {
    if (this.props.topic && this.props.topic.user) {
      return (
        <div className="topicuser" style={{ display: 'flex', alignItems: 'center' }}>
          <div className="tp_userimg">
            <img src={me} alt="" />
          </div>
          <div className="tp_usertx">
            <p className="tp_usernam">The topic's username</p>
            <p className="tp_sendtime">{moment().format('YYYY-MM-DD HH:mm')}</p>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="topicitemcon">
        {this.renderAuthor()}
        <div className="topictx topic-title">
          <p><Link to={`/topic/${this.props.topic.id}`}>#<em>{this.props.topic.title}</em>#</Link>{this.props.topic.content}</p>
        </div>
        <ul className="clearfix topic-img">
          {this.renderImages()}
        </ul>
      </div>
    );
  }

  static propTypes = {
    topic: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      images: PropTypes.array,
      user: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.shape({
          id: PropTypes.number.isRequired,
          url: PropTypes.string.isRequired
        })
      }).isRequired
    })
  };

  static defaultProps = {
    topic: {
      images: [
        "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg",
        "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg",
        "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg",
        "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg",
        "http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg",
      ],
      user: {
        id: 1,
        name: 'user'
      },
      id: 0,
      title: 'title',
      content: 'content'
    }
  };
}

/**
 * 赛客发表的文章
 */
class Article extends Component {

  // componentWillMount() {
  //   this.props.fetchTopics({
  //     include: [
  //       'images',
  //       {
  //         relation: 'user',
  //         scope: { include: 'avatar' }
  //       }
  //     ],
  //     skip: 0,
  //     limit: 10,
  //     order: 'created DESC'
  //   });
  // }

  render() {
    return (
      <div className="article-container">
        <div className="article-left-content">
          <Switch>
              <Route exact path='/article' component={ArticleList} />
              <Route path="/article/create" exact component={ CreateArticle }/>
              <Route path="/article/:topicId" exact component={ CreateArticle }/>
              <Route exact component={ NotFound } />
          </Switch>
        </div>
        <div className="right-content article-right-content">
          <img src="http://enroll.geexek.com/web/img/runbg_04.png" alt="" />
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/article/create" className="btn-publish">发文章</Link>
            <Link to="/topic/create" className="btn-publish">发话题</Link>
          </span>
          <div className="right-sidebar-topic-list">
            <div className="home-diary-top">
              <span /><p><a href="javascript;">热门话题</a></p>
            </div>
            {this.props.topics.map(item => <TopicItem key={item.id} />)}
          </div>
        </div>
      </div>
    );
  }

  state = {
    index: 0
  };

  static propTypes = {
    topics: PropTypes.array,
    children: PropTypes.element,
    fetchTopics: PropTypes.func
  };

  static defaultProps = {
    topics: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 }
    ]
  };
}

export default Article;

// const mapStateToProps = state => {
//   return {
//     topics: state.topics.all
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ fetchTopics }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Article);
