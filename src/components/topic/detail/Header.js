import React, { Component } from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

import {Button, Card} from 'antd';

import { TOGGLE_TOPIC_C, TOGGLE_TOPIC_PRAISE } from '../../../constants';

import me from '../../header/meUnauth.png';

import './Header.css';
import {FormOutlined, LikeOutlined, StarOutlined} from "@ant-design/icons";

class TopicDetailHeader extends Component {

  constructor(props) {
    super(props);
    this.isCollected = props.topic && props.topic.collections && props.topic.collections.length > 0;
    this.isPraised = props.topic && props.topic.praises && props.topic.praises.length > 0;
    this.state = {
      topicCollectCount: 0,
      topicPraiseCount: 0
    };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.collection && nextProps.collection.typeId === this.props.topic.id) {
  //     if (nextProps.collection.marked !== this.isCollected) {
  //       this.isCollected = nextProps.collection.marked;
  //       if (nextProps.collection.marked) {
  //         this.setState({topicCollectCount: this.state.topicCollectCount + 1});
  //       } else {
  //         this.setState({topicCollectCount: this.state.topicCollectCount - 1});
  //       }
  //     }
  //   } else {
  //     this.isCollected = nextProps.topic && nextProps.topic.collections && nextProps.topic.collections.length > 0;
  //     this.setState({topicCollectCount: nextProps.topicCollectCount});
  //   }
  //   if (nextProps.praise && nextProps.praise.typeId === this.props.topic.id ) {
  //     if (nextProps.praise.marked !== this.isPraised) {
  //       this.isPraised = nextProps.praise.marked;
  //       if (nextProps.praise.marked) {
  //         this.setState({topicPraiseCount: this.state.topicPraiseCount + 1});
  //       } else {
  //         this.setState({topicPraiseCount: this.state.topicPraiseCount - 1});
  //       }
  //     }
  //   } else {
  //     this.isPraised = nextProps.topic && nextProps.topic.praises && nextProps.topic.praises.length > 0;
  //     this.setState({topicPraiseCount: nextProps.topicPraiseCount});
  //   }
  // }

  renderImages() {
    if (this.props.topic && this.props.topic.images) {
      return this.props.topic.images.map((item, index) => (
        <li className="topic-img-show" key={index}>
          <img src={item.url} alt="" style={{ maxHeight: '160px' }} />
        </li>
      ));
    }
    return null;
  }

  render() {
    return (
      <Card className="article-detail">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="article-creator-img">
            <img src={me} alt="这是图片" />
          </div>
          <div className="tp_usertx">
            <p className="tp_usernam">The publisher of the topic !! </p>
            <p className="tp_sendtime">{moment().format('MM/DD HH:mm')}</p>
          </div>
          <div style={{ flexGrow: 1 }} />
          <span className="article-info-comment">
            <Button type="link" >
              <FormOutlined />23
            </Button>
            <Button type="link" onClick={() => this.props.toggle('Collections', TOGGLE_TOPIC_C, this.props.topic.id, this.isCollected)}>
              <StarOutlined />23
            </Button>
            <Button type="link" onClick={() => this.props.toggle('Praises', TOGGLE_TOPIC_PRAISE, this.props.topic.id, this.isPraised)}>
              <LikeOutlined />23
            </Button>
          </span>
        </div>
        <div className="topictx topic_detail">
          <p style={{ color: 'blue', display: 'inline-block', marginRight: 10 }}>
            #<em>The topic title</em>#
          </p>
          The topic content !!!
        </div>
        <div className="topicimg">
          <ul style={{ listStyle: 'none' }}>
            {this.renderImages()}
          </ul>
        </div>
      </Card>
    );
  }

  static propTypes = {
    fetchTopic: PropTypes.func,
    toggle: PropTypes.func,
    topic: PropTypes.object,
    comment: PropTypes.object,
    praise: PropTypes.object,
    collection: PropTypes.object,
    topicCollectCount: PropTypes.number,
    topicPraiseCount: PropTypes.number,
    topicCommentCount: PropTypes.number
  };

  static defaultProps = {
    topic: {
      create: '',
      content: ''
    }
  };
}

export default TopicDetailHeader;
