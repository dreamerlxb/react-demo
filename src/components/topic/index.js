import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Switch, Route, Link } from 'react-router-dom';
import TopicList from './list';
import TopicDetail from './detail';
import CreateTopic from './create';
import NotFound from '../notFound';


import './index.css';
const imgTmp = 'http://f.hiphotos.baidu.com/image/h%3D300/sign=4a0a3dd10155b31983f9847573ab8286/503d269759ee3d6db032f61b48166d224e4ade6e.jpg';
// import PropTypes from 'prop-types';
// import {
//   Link
// } from 'react-router-dom';

class ArticleItem extends Component {
  render() {
    return (
      <li className="art-hot-item">
        <div className="hot-item-img2">
          <img alt="挑战自己，厚积薄发！我的跑马历程！" src={ imgTmp }/>
        </div>
        <div className="hot-item-left">
          <div className="art-info-title">
            <h3>Article title !!! </h3>
          </div>
          <div className="art-info-abstract">
            <h3>Article abstract !!!</h3>
          </div>
        </div>
      </li>
    );
  }
    
  static propTypes = {
    item: PropTypes.object
  };
}

class Topic extends Component {
  static propTypes = {
    articles: PropTypes.array
  };

  static defaultProps = {
    articles: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
    ]
  };

  render() {
    return (
      <div className="topic-container">
        <div className="topic-left-content">
          <Switch>
              <Route exact path='/topic' component={TopicList} />
              <Route path="/topic/create" exact component={ CreateTopic }/>
              <Route path="/topic/:topicId" exact component={ TopicDetail }/>
              <Route exact component={ NotFound } />
          </Switch>
        </div>

        <div className="topic-right-content">
          <img src="http://placehold.it/330x180" alt=""/>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Link to="/article/create" className="btn-publish">发文章</Link>
            <Link to="/topic/create" className="btn-publish">发话题</Link>
          </span>
          <div>
            <div className="home-diary-top">
              <span/><p style={{marginBottom: 0}}>热门文章</p>
            </div>
            <ul className="right-article-list">
              { this.props.articles.map(item => <ArticleItem item={item} key={item.id}/>) }
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Topic;