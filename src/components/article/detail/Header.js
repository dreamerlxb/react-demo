import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
import Card from 'antd/lib/card';
import Icon from 'antd/lib/icon';
import {
  TOGGLE_ARTICLE_C,
  TOGGLE_ARTICLE_PRAISE
} from '../../../constants';
// import { fetchCount, toggle } from '../../../../actions/common.action';

import me from '../../header/meUnauth.png';

import './Header.css';

class ArticleHeader extends Component {

  constructor(props) {
    super(props);
    this.isCollected = props.article && props.article.collections && props.article.collections.length > 0;
    this.isPraised = props.article && props.article.praises && props.article.praises.length > 0;
    this.state = {
      collectCount: 0,
      praiseCount: 0
    };
  }

  render() {
    return (
      <Card className="article-detail" title={<h4 className="article-title">{this.props.article ? this.props.article.title : 'Article Title!!!'}</h4>}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="article-creator-img">
            <img src={me} alt="这是图片" />
          </div>
          <div className="tp_usertx">
            <p className="tp_usernam">{this.props.article && this.props.article.user ? this.props.article.user.name : ''}</p>
            <p className="tp_sendtime">{moment().format('MM/DD HH:mm')}</p>
          </div>
          <div style={{ flexGrow: 1 }} />
          <span className="article-info-comment">
            <a>
              <Icon type="form" />32
            </a>
            <a onClick={() => this.props.toggle('Collections', TOGGLE_ARTICLE_C, this.props.article.id, this.isCollected)}>
              <Icon type="star" />32
            </a>
            <a onClick={() => this.props.toggle('Praises', TOGGLE_ARTICLE_PRAISE, this.props.article.id, this.isPraised)}>
              <Icon type="like" />33
            </a>
          </span>
        </div>
        <article className="article-content" dangerouslySetInnerHTML={{ __html: this.props.article ? this.props.article.content : '' }} />
      </Card>
    );
  }

  static propTypes = {
    article: PropTypes.object,
    collectCount: PropTypes.number,
    toggle: PropTypes.func,
    collection: PropTypes.object,
    praise: PropTypes.object,
    commentCount: PropTypes.number,
    praiseCount: PropTypes.number
  };

  static defaultProps = {
    article: {
      create: '',
      content: ''
    }
  };
}

export default ArticleHeader;
