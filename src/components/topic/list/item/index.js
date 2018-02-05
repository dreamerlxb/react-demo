import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Modal from 'antd/lib/modal';
import Icon from 'antd/lib/icon';
import { TOGGLE_TOPIC_C, TOGGLE_TOPIC_PRAISE } from '../../../../constants';

import './index.css';
import me from '../../../header/meUnauth.png';

class Item extends Component {

  constructor(props) {
    super(props);
    this.isCollected =  props.topic && props.topic.collections && props.topic.collections.length > 0;
    this.isPraised =  props.topic && props.topic.praises && props.topic.praises.length > 0;
    this.state = {
      previewImage: '',
      previewVisible: false
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.collection && nextProps.collection.typeId === this.props.topic.id) {
  //     this.isCollected = nextProps.collection.marked;
  //   } else {
  //     this.isCollected =  nextProps.topic && nextProps.topic.collections && nextProps.topic.collections.length > 0;
  //   }
  //   if (nextProps.praise && nextProps.praise.typeId === this.props.topic.id) {
  //     this.isPraised = nextProps.praise.marked;
  //   } else {
  //     this.isPraised =  nextProps.topic && nextProps.topic.praises && nextProps.topic.praises.length > 0;
  //   }
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   const c = nextProps.collection && nextProps.collection.typeId !== this.props.topic.id;
  //   const p = nextProps.praise && nextProps.praise.typeId !== this.props.topic.id;
  //   if (c && p ) {
  //     return false;
  //   }
  //   return true;
  // }

  renderImages() {
    if (this.props.topic && this.props.topic.images) {
      return this.props.topic.images.map((item, index) => (
        <li className="topic-img" key={index}>
          <img src={ item } alt="" onClick={(e) => this.setState({previewImage: e.target.src, previewVisible: true}) }/>
        </li>
      ));
    }
    return null;
  }

  renderAuthor() {
    if (this.props.topic && this.props.topic.user) {
      return (
        <div className="topic-user">
          <div className="tp_userimg">
            <img src={ me } alt="img" />
          </div>
          <div className="tp_usertx">
            <p className="tp_usernam">The topic author's name !!</p>
            <p className="tp_sendtime">{moment().format('YYYY-MM-DD HH:mm')}</p>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="topicitemcon topic-list-item">
        <div className="topicbot" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          { this.renderAuthor() }
          <div className="tp_comment">
            <a className="praise_topic_btn" >
              <Icon type="form" />
            </a>
            <a className="follow_btn" onClick={ () => this.props.toggle('Collections', TOGGLE_TOPIC_C, this.props.topic.id, this.isCollected) }>
              <Icon type="star" />
            </a>
            <a className="comNum topic_detail" onClick={ () => this.props.toggle('Praises', TOGGLE_TOPIC_PRAISE, this.props.topic.id, this.isPraised) }>
              <Icon type="like" />
            </a>
          </div>
        </div>
        <div className="topic-detail">
          <p><Link to="/topic/2">#<em>Topic title</em>#</Link>Topic content</p>
        </div>
        <ul className="topic-imgs">
          { this.renderImages() }
        </ul>
        <Modal visible={this.state.previewVisible} footer={null} onCancel={() => this.setState({ previewVisible: false })}>
          <img alt="example" style={{ width: '100%' }} src={this.state.previewImage} />
        </Modal>
      </div>
    );
  }

  static propTypes = {
    isPraised: PropTypes.bool,
    collection: PropTypes.object,
    praise: PropTypes.object,
    toggle: PropTypes.func,
    topic: PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
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
        "http://e.hiphotos.baidu.com/image/h%3D300/sign=8d3a9ea62c7f9e2f6f351b082f31e962/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg",
        "http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg",
        "http://e.hiphotos.baidu.com/image/h%3D300/sign=8d3a9ea62c7f9e2f6f351b082f31e962/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg",
        "http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg",
        "http://e.hiphotos.baidu.com/image/h%3D300/sign=8d3a9ea62c7f9e2f6f351b082f31e962/500fd9f9d72a6059099ccd5a2334349b023bbae5.jpg",
        "http://d.hiphotos.baidu.com/image/pic/item/a044ad345982b2b713b5ad7d3aadcbef76099b65.jpg",
      ],
      user: {
        id: 2,
        name: 'username'
      }
    }
  };
}

export default Item;
