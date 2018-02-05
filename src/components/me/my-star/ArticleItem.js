import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Popconfirm from 'antd/lib/popconfirm';
import Icon from 'antd/lib/icon';
// import { bindActionCreators } from 'redux';
import moment from 'moment';
import './ArticleItem.css';
// import { toggle } from '../../../actions/common.action.js';
// import { TOGGLE_ARTICLE_C } from '../../../constants';

class ArticleItem extends Component {

  // state = {
  //   del: false
  // };

  // delCollection = () => {
  //   this.props.toggle('Collections', TOGGLE_ARTICLE_C, { marked: true, type: 'article', typeId: this.props.article.id });
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.articleCollection) {
  //     this.setState({del: true});
  //   }
  // }

  render() {
    // if (this.state.del) {
    //   return null;
    // }
    return (
      <div className="articleitemcon">
        <div className="topicuser" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <div className="tp_userimg">
            <img src="http://d.hiphotos.baidu.com/image/pic/item/d50735fae6cd7b896506d1cd042442a7d9330e12.jpg" alt="user-avatar" />
          </div>
          <p className="tp_usernam">This is author's name</p>
          <div style={{flexGrow: 1}}/>
          <p className="tp_sendtime">{moment().format('YYYY-MM-DD HH:mm')}</p>
        </div>
        <div className="article-info">
          <div className="article-user-img">
            <img alt="" src="http://b.hiphotos.baidu.com/image/pic/item/71cf3bc79f3df8dc086b64dfc611728b4710282e.jpg" />
          </div>
          <div className="articlebot">
            <div style={{alignSelf: 'flex-start'}}>
              <h3>This article’s title</h3>
            </div>
            <div style={{flexGrow: 1}}/>
            <Popconfirm title="确定取消吗？">
              <a className="art_comment" href="javascript;">
                <Icon type="star" />
              </a>
            </Popconfirm>
          </div>
        </div>
      </div>
    );
  }

  static propTypes = {
    article: PropTypes.object,
    articleCollection: PropTypes.object,
    toggle: PropTypes.func
  };
}

export default ArticleItem;

// const mapStateToProps = (state, ownProps) => { // 登陆用户的所有报名信息
//   const c = state.collections.articleCollection;
//   return {
//     articleCollection: c && ownProps.article.id === c.typeId ? c : null
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ toggle }, dispatch);
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ArticleItem);
