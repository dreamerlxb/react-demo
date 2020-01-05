import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Tabs, Input} from 'antd';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { fetchArticles } from '../../../../actions/articles.action';
import TopicList from './list';
import './index.css';

const Search = Input.Search;
const { TabPane } = Tabs;

/**
 * 赛客发表的文章
 */
class TopicPane extends Component {

  // constructor(props) {
  //   super(props);
  // }

  // handleSearch(value) {
  //   console.log(value); // eslint-disable-line
  // }

  // componentWillMount() {
  //   this.props.fetchArticles({
  //     include: [
  //       {
  //         relation: 'user', scope: { include: 'avatar' }
  //       },
  //       'image'
  //     ],
  //     order: ['type DESC', 'created DESC']
  //   });
  // }

  handleSearch = value => console.log('Search keywords', value);

  render() {
    return (
        <div>
          <Search placeholder="搜索话题关键字"
            size="large"
            style={{margin: '0 0 20px'}}
            onSearch={this.handleSearch}
            onChange={this.onChange}/>
          <Tabs defaultActiveKey="1" size="large">
            <TabPane tab="推荐" key="3">
              <TopicList />
            </TabPane>
            <TabPane tab="热门" key="1">
              <TopicList />
            </TabPane>
            <TabPane tab="最新" key="2">
              <TopicList />
            </TabPane>
          </Tabs>
        </div>
    );
  }

  static propTypes = {
    fetchArticles: PropTypes.func
  };

  static defaultProps = {
    
  };
}

export default TopicPane;
// const mapStateToProps = (state, ownProps) => {
//   return {
//     articles: state.articles.all
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ fetchArticles }, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Topic);
