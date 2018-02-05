import React from 'react';
import PropTypes from 'prop-types';
// import Popconfirm from 'antd/lib/popconfirm';
// import { Link } from 'react-router-dom';
// import moment from 'moment';
import './Item.css';
// import commentImg from '../../../images/img_17.png';
// import likeImg from '../../../images/img_11.png';

class Item extends React.Component {


  render() {
    return (
      <div className="topicitemcon">{this.props.item}
        {/* <div className="topictx">
          <p><Link to={`/racer-say/topic/${this.props.item.id}`}>#<em>{ this.props.item.title }</em>#</Link>{this.props.item.content}</p>
        </div>
        <div className="topicbot">
          <div className="topicuser">
            <div className="tp_userimg">
              <img src={this.props.item.user.avatar.url} alt={this.props.item.user.name}/>
            </div>
            <div className="tp_usertx">
              <p className="tp_usernam">{this.props.item.user.name}</p>
              <p className="tp_sendtime">{ moment(this.props.item.created).format('YYYY-MM-DD HH:mm') }</p>
            </div>
          </div>
          <span className="my_tp_comment">
            <Popconfirm title="确定要删除吗?" onConfirm={ () => this.props.delTopic(this.props.item.id) } onCancel={ () => { console.log('取消'); } } okText="确认" cancelText="取消">
              <a className="tp_deletbtn" href="#">删除</a>
            </Popconfirm>
            <a>
              <img src={likeImg} alt=""/>
              <span style={{ color: '#999' }}>0</span>
            </a>
            <a>
              <img src={commentImg} alt=""/>
              <span>0</span>
            </a>
          </span>
        </div> */}
      </div>
    );
  }


  static propTypes = {
    item: PropTypes.number,
    delTopic: PropTypes.func
  };
}

export default Item;
