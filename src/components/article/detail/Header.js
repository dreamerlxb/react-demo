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
// import collection0 from '../../../../images/collection_0.png';
// import collection1 from '../../../../images/collection_1.png';
// import praise0 from '../../../../images/praise_0.png';
// import praise1 from '../../../../images/praise_1.png';
// import commentImg from '../../../../images/comment.png';

import './Header.css';

class ArticleHeader extends Component {

  constructor(props) {
    super(props);
    this.isCollected = props.article && props.article.collections && props.article.collections.length > 0;
    this.isPraised = props.article && props.article.praises && props.article.praises.length > 0;
    this.state = {
      articleCollectCount: 0,
      articlePraiseCount: 0
    };
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.collection && nextProps.collection.typeId === this.props.article.id) {
    //   if (nextProps.collection.marked !== this.isCollected) {
    //     this.isCollected = nextProps.collection.marked;
    //     if (nextProps.collection.marked) {
    //       this.setState({articleCollectCount: this.state.articleCollectCount + 1});
    //     } else {
    //       this.setState({articleCollectCount: this.state.articleCollectCount - 1});
    //     }
    //   }
    // } else {
    //   this.isCollected = nextProps.article && nextProps.article.collections && nextProps.article.collections.length > 0;
    //   this.setState({articleCollectCount: nextProps.articleCollectCount});
    // }
    // if (nextProps.praise && nextProps.praise.typeId === this.props.article.id ) {
    //   if (nextProps.praise.marked !== this.isPraised) {
    //     this.isPraised = nextProps.praise.marked;
    //     if (nextProps.praise.marked) {
    //       this.setState({articlePraiseCount: this.state.articlePraiseCount + 1});
    //     } else {
    //       this.setState({articlePraiseCount: this.state.articlePraiseCount - 1});
    //     }
    //   }
    // } else {
    //   this.isPraised = nextProps.article && nextProps.article.praises && nextProps.article.praises.length > 0;
    //   this.setState({articlePraiseCount: nextProps.articlePraiseCount});
    // }
  }

  render() {
    return (
      <Card className="article-detail" title={<h4 className="article-title">{this.props.article ? this.props.article.title : ''}</h4>}>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className="article-creator-img">
            <img src={ me} alt="这是图片" />
          </div>
          <div className="tp_usertx">
            <p className="tp_usernam">{this.props.article && this.props.article.user ? this.props.article.user.name : ''}</p>
            <p className="tp_sendtime">{moment().format('MM/DD HH:mm')}</p>
          </div>
          <div style={{flexGrow: 1}}/>
          <span className="article-info-comment">
            <a className="praise_topic_btn">
              {/* <img src={ me } alt="评论"/> */}
              <Icon type="form"/>32
            </a>
            <a className="follow_btn" onClick={ () => this.props.toggle('Collections', TOGGLE_ARTICLE_C, this.props.article.id, this.isCollected) }>
              {/* <img src={ me } alt="收藏" /> */}
              <Icon type="star"/>32
            </a>
            <a className="topic_detail" onClick={ () => this.props.toggle('Praises', TOGGLE_ARTICLE_PRAISE, this.props.article.id, this.isPraised) }>
              {/* <img src={ me } alt="点赞" /> */}
              <Icon type="like"/>33
            </a>
          </span>
        </div>
        <article className="article-content" dangerouslySetInnerHTML={{__html: this.props.article ? this.props.article.content : ''}} />
      </Card>
    );
  }

  static propTypes = {
    article: PropTypes.object,
    articleCollectCount: PropTypes.number,
    toggle: PropTypes.func,
    collection: PropTypes.object,
    praise: PropTypes.object,
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

export default ArticleHeader;
