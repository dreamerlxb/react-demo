import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';

import Input from 'antd/lib/input';
import Item from './item';
// import { fetchLatestArticle } from '../../../../../actions/articles.action';
// import { toggle } from '../../../../../actions/common.action';
import { LOGIN_USER_ID } from '../../../constants';
import './index.css';

const Search = Input.Search;
const userId = localStorage.getItem(LOGIN_USER_ID);

class ArticleList extends Component {
  
// this.props.fetchArticles({
//       where: {
//         or: [
//           {
//             title: {
//               like: `%${value}%`
//             }
//           }, {
//             content: {
//               like: `%${value}%`
//             }
//           }
//         ]
//       },
//       include: [
//         'image',
//         {
//           relation: 'user',
//           scope: { include: 'avatar' }
//         }, {
//           relation: 'collections',
//           scope: { where: { userId } }
//         }, {
//           relation: 'praises',
//           scope: { where: { userId } }
//         }
//       ],
//       order: ['type DESC', 'lastUpdated DESC'],
//       limit: 10,
//       skip: 0
//     });
  handleSearch = value => {
    this.props.fetchLatestArticle(+userId, 10, 0, {
      term: {
        col: 'title',
        rel: 'like',
        val: `%${value}%`
      },
      or: {
        term: {
          col: 'content',
          rel: 'like',
          val: `%${value}%`
        }
      }
    });
  }

  // componentWillMount() {
  //   this.props.fetchLatestArticle(+userId, 10, 0);
  // }

  render() {
    return (
      <div className="show-list article-list" style={{display: 'block'}}>
        <Search
          placeholder="搜索文章、人气作品"
          size="large"
          style={{marginBottom: '20px'}}
          onSearch={this.handleSearch}/>
        <ul className="indexnavbtn article-nav-title">
          <li className="liactive"><span>最新文章</span></li>
          <li><span><Link to="/article/hot">热门推荐</Link></span></li>
        </ul>
        <ul className="hot-art-list">
          {
            this.props.articles.map(item => (
              <Item key={item.id} item={ item }
                toggle={ (modelName, type, typeId, marked) => this.props.toggle(modelName, type, { typeId, marked, type: 'article' })}/>
            ))
          }
        </ul>
        <div className="list_more">
          {
            this.props.articles.length > 10 ? <Link to={{pathname: '/article/more', query: { type: 'latest' }}}>查看更多热门文章&gt;&gt;</Link> : null
          }
        </div>
      </div>
    );
  }

  static propTypes = {
    fetchLatestArticle: PropTypes.func,
    articles: PropTypes.array,
    collection: PropTypes.object,
    toggle: PropTypes.func,
    praise: PropTypes.object
  };

  static defaultProps = {
    articles: [
      {id: 0},
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},
    ]
  };
}
export default ArticleList;

// const mapStateToProps = (state, ownProps) => { // eslint-disable-line
//   return {
//     articles: state.articles.latest || []
//   };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ fetchLatestArticle, toggle }, dispatch)
// });

// export default connect(mapStateToProps, mapDispatchToProps)(LatestArticle);
