import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import Popconfirm from 'antd/lib/popconfirm';
// import { bindActionCreators } from 'redux';
import moment from 'moment';
import './TopicItem.css';
// import { toggle } from '../../../actions/common.action.js';
// import { TOGGLE_TOPIC_C } from '../../../constants';
import me from '../../header/meUnauth.png';

class TopicItem extends Component {


  // delCollection = () => {
  //   this.props.toggle('Collections', TOGGLE_TOPIC_C, { marked: true, type: 'topic', typeId: this.props.topic.id });
  // }

  // state = {
  //   del: false
  // };

  componentWillReceiveProps(nextProps) {
    if (nextProps.topicCollection) {
      this.setState({del: true});
    }
  }


  renderImages() {
    if (this.props.topic && this.props.topic.images) {
      return this.props.topic.images.map((item, index) => (
        <li className="topic-img-show" key={index}>
          <img src={item.url} alt="" style={{height: '100%', maxHeight: '160px'}} />
        </li>
      ));
    }
    return null;
  }

  render() {
    // if (this.state.del) {
    //   return null;
    // }
    return (
      <div className="topicitemcon">
         <div className="topicuser" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <div className="tp_userimg">
            <img src={ me } alt="user-avatar" />
          </div>
          <p className="tp_usernam">{this.props.topic.user.name}</p>
          <div style={{ flexGrow: 1}}/>
          <p className="tp_sendtime">{moment().format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className="topictx topic_detail">
          <p><Link to={`/racer-say/topic/${this.props.topic.id}`}>#<em>{ this.props.topic.title }</em>#</Link>{ this.props.topic.content }</p>
        </div>
        <div className="topicimg">
          <ul className="clearfix">
          { this.renderImages() }
          </ul>
        </div>
        <Popconfirm title="确定取消吗？" onConfirm={this.delCollection }>
          <div style={{height: '16px'}}>
            <a className="tp_comment" href="javascipt;">取消收藏</a>
          </div>
        </Popconfirm>
      </div>
    );
  }

  static propTypes = {
    topic: PropTypes.object,
    topicCollection: PropTypes.object,
    toggle: PropTypes.func
  };
}

export default TopicItem;

// const mapStateToProps = (state, ownProps) => { // 登陆用户的所有报名信息
//   const c = state.collections.topicCollection;
//   return {
//     topicCollection: c && ownProps.topic.id === c.typeId ? c : null
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ toggle }, dispatch);
// };
// export default connect(mapStateToProps, mapDispatchToProps)(TopicItem);
