import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';
import {Pagination} from 'antd';

import Item from '../item';
// import { fetchLatestTopics } from '../../../../../actions/topics.action';
// import { toggle, fetchCount } from '../../../../../actions/common.action';
// import { LOGIN_USER_ID } from '../../../../../constants';
import './index.css';

// const userId = localStorage.getItem(LOGIN_USER_ID);
/**
 * 最新话题，按时间排序最前面的
 */
class TopicList extends Component {

  // componentWillMount() {
  //   this.props.fetchLatestTopics(+userId, 10, 0);
  //   this.props.fetchCount('Topics', FETCH_TOPICS_TOTAL);
  // }

  render() {
    return (
        <div>
          {
            this.props.topics ? this.props.topics.map(item => (<Item item={item} key={item} />)) : (<div>No data !!!</div>)
          }
          <div style={{margin: 10}}>
            <Pagination defaultCurrent={1} total={this.props.total}/>
          </div>
        </div>
    );
  }

  static propTypes = {
    fetchLatestTopics: PropTypes.func,
    toggle: PropTypes.func,
    fetchCount: PropTypes.func,
    topics: PropTypes.array,
    total: PropTypes.number
  };

  static defaultProps = {
    topics: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  };
}

export default TopicList;

// const mapStateToProps = state => {
//   return {
//     topics: state.topics.latest || [],
//     total: state.topics.total
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ fetchLatestTopics, toggle, fetchCount }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(LatestTopic);
