import React from 'react';
import PropTypes from 'prop-types';
import Popconfirm from 'antd/lib/popconfirm';
import Icon from 'antd/lib/icon';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Item.css';

class Item extends React.Component {

  render() {
    return (
      <div className="me-topic-item">
        <div className="topict-title">
          <p><Link to={`/topic/2`}>#<em>title</em>#</Link>comments</p>
        </div>
        <div className="topicbot">
          <div className="topicuser">
            <div className="tp_userimg">
              <img src="http://b.hiphotos.baidu.com/image/pic/item/71cf3bc79f3df8dc086b64dfc611728b4710282e.jpg" alt=""/>
            </div>
            <div className="tp_usertx">
              <p className="tp_usernam">Username</p>
              <p className="tp_sendtime">{ moment().format('YYYY-MM-DD HH:mm') }</p>
            </div>
          </div>
          <span className="my_tp_comment">
            <Popconfirm title="确定要删除吗?" onConfirm={ () => this.props.delTopic(2) } onCancel={ () => { console.log('取消'); } } okText="确认" cancelText="取消">
              <a className="tp_deletbtn" href="#"><Icon type="delete" /></a>
            </Popconfirm>
            <a href="javascript;">
              <Icon type="like" /><span style={{ color: '#999' }}>0</span>
            </a>
            <a href="javascript;">
              <Icon type="form" /><span>0</span>
            </a>
          </span>
        </div>
      </div>
    );
  }

  static propTypes = {
    item: PropTypes.object,
    delTopic: PropTypes.func
  };
}

export default Item;
