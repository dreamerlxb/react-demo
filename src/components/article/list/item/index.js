import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';
// import Icon from 'antd/lib/icon';
import {StarOutlined, LikeOutlined, EyeOutlined} from '@ant-design/icons';
import {Button} from "antd";
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { TOGGLE_ARTICLE_C, TOGGLE_ARTICLE_PRAISE } from '../../../../constants';

import me from '../../../header/meUnauth.png';

import './index.css';


class Item extends Component {

  constructor(props) {
    super(props);
    this.isCollected = props.item.hasCollection;
    this.isPraised = props.item.hasPraise;
    this.collectionCount = props.item.collectionCount;
    this.praiseCount = props.item.praiseCount;
  }

  handleClick = () => {
    // browserHistory.push(`/racer-say/article/${this.props.item.id}`);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.collection && nextProps.collection.typeId === this.props.item.id) {
  //     this.isCollected = nextProps.collection.marked;
  //     if (this.isCollected) {
  //       this.collectionCount = this.collectionCount + 1;
  //     } else {
  //       this.collectionCount = this.collectionCount - 1;
  //     }
  //   }
  //   if (nextProps.praise && nextProps.praise.typeId === this.props.item.id) {
  //     this.isPraised = nextProps.praise.marked;
  //     if (this.isPraised) {
  //       this.praiseCount = this.praiseCount + 1;
  //     } else {
  //       this.praiseCount = this.praiseCount - 1;
  //     }
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // const c = nextProps.collection && nextProps.collection.typeId !== this.props.item.id;
  //   // const p = nextProps.praise && nextProps.praise.typeId !== this.props.item.id;
  //   if (nextProps.collection == null && nextProps.praise == null ) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    return (
      <li className="art-hot-item article-item">
        <div className="hot-item-left">
          <span className="art-info-title">
            <h3>Article title</h3>
          </span>
          <span className="art-info-abstract">
            <h3>Article abstract</h3>
          </span>
          <div className="art-info-detail">
            <div className="art-user-info">
              <img alt="用户名" src={ me } />
              <div>
                <p>Published user's name</p>
                <p>{moment().format('MM-DD HH:mm') }</p>
              </div>
            </div>
            <span className="hot-info-sign">
              <Button type="link">
                <EyeOutlined />&nbsp;123
              </Button>
              <Button type="link" onClick={ () => this.props.toggle('Collections', TOGGLE_ARTICLE_C, this.props.item.id, this.isCollected) }>
                <StarOutlined />&nbsp;23
              </Button>
              <Button type="link" onClick={ () => this.props.toggle('Praises', TOGGLE_ARTICLE_PRAISE, this.props.item.id, this.isPraised) }>
                <LikeOutlined />&nbsp;12
              </Button>
            </span>
          </div>
        </div>
        <div className="hot-item-img" onClick={ this.handleClick }>
          <img alt="挑战自己，厚积薄发！" src="http://f.hiphotos.baidu.com/image/pic/item/503d269759ee3d6db032f61b48166d224e4ade6e.jpg"/>
        </div>
      </li>
    );
  }

  static propTypes = {
    item: PropTypes.object,
    collection: PropTypes.object,
    praise: PropTypes.object,
    toggle: PropTypes.func
  };
}
export default Item;

// const mapStateToProps = (state, ownProps) => {
//   let collection = null;
//   const articleCollection = state.collections.articleCollection;
//   if (articleCollection && articleCollection.typeId === ownProps.item.id) {
//     collection = articleCollection;
//   }
//   let praise = null;
//   const articlePraise = state.praises.articlePraise;
//   if (articlePraise && articlePraise.typeId === ownProps.item.id) {
//     praise = articlePraise;
//   }
//   return { praise, collection };
// };

// // const mapDispatchToProps = (dispatch) => ({
// //   ...bindActionCreators({ toggle }, dispatch)
// // });

// export default connect(mapStateToProps)(Item);


/* const imgTmp = 'http://enroll.geexek.com/files/image/20151020/1445311479427067948.jpg?w=800&amp;h=600';
class Item extends Component {
  static propTypes = {
    item: PropTypes.object,
    isPraised: PropTypes.bool,
    collection: PropTypes.object,
    praise: PropTypes.object,
    toggle: PropTypes.func
  };
  static defaultProps = {
    isPraised: false
  };

  constructor(props) {
    super(props);
    this.isCollected =  props.item && props.item.collections && props.item.collections.length > 0;
    this.isPraised =  props.item && props.item.praises  && props.item.praises.length > 0;
  }
  handleClick = () => {
    browserHistory.push(`/racer-say/article/${this.props.item.id}`);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.collection && nextProps.collection.typeId === this.props.item.id) {
      this.isCollected = nextProps.collection.marked;
    } else {
      this.isCollected =  nextProps.item && nextProps.item.collections && nextProps.item.collections.length > 0;
    }
    if (nextProps.praise && nextProps.praise.typeId === this.props.item.id) {
      this.isPraised = nextProps.praise.marked;
    } else {
      this.isPraised =  nextProps.item && nextProps.item.praises  && nextProps.item.praises.length > 0;
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const c = nextProps.collection && nextProps.collection.typeId !== this.props.item.id;
    const p = nextProps.praise && nextProps.praise.typeId !== this.props.item.id;
    if (c && p ) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <li className="art-hot-item">
        <div className="hot-item-left">
          <span className="art-info-title"> <h3>{this.props.item ? this.props.item.title : ''}</h3> </span>
          <span className="art-info-abstract"> <h3>{this.props.item ? this.props.item.abstract : ''}</h3> </span>
          <div className="art-info-detail">
            <div className="art-user-info">
              <img alt="用户名" src={this.props.item && this.props.item.user && this.props.item.user.avatar ? this.props.item.user.avatar.url : me} />
              <div>
                <p>{this.props.item && this.props.item.user ? this.props.item.user.name : ''}</p>
                <p>{moment( this.props.item ? this.props.item.created : null).format('MM-DD HH:mm') }</p>
              </div>
            </div>
            <span className="hot-info-sign">
              <a>
                <img src="http://enroll.geexek.com/web/img/img_44.png" />&nbsp;
              </a>
              <a onClick={ () => this.props.toggle('Collections', TOGGLE_ARTICLE_C, this.props.item.id, this.isCollected) }>
                <img src={this.isCollected ? collection1 : collection0} />&nbsp;
              </a>
              <a onClick={ () => this.props.toggle('Praises', TOGGLE_ARTICLE_PRAISE, this.props.item.id, this.isPraised) }>
                <img src={this.isPraised ? praise1 : praise0} />&nbsp;
              </a>
            </span>
          </div>
        </div>
        <div className="hot-item-img" onClick={ this.handleClick }>
          <img alt="挑战自己，厚积薄发！我的跑马历程！" src={this.props.item && this.props.item.image ? this.props.item.image.url : imgTmp}/>
        </div>
      </li>
    );
  }
}

export default Item;*/
