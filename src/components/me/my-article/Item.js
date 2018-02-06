import React from 'react';
import PropTypes from 'prop-types';
import Popconfirm from 'antd/lib/popconfirm';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Item.css';
import me from '../../header/meUnauth.png';

class Item extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="my-article-item">
        <div className="my-article-info">
          <div className="my-article-avatar">
            <img src={me} alt="img" />
          </div>
          <div className="my-article-detail">
            <div>
              <p className="tp_usernam">This is  a title !!! </p>
              <p className="tp_sendtime">{ moment().format('YYYY-MM-DD HH:mm') }</p>
            </div>
            <span> 审核中...</span>
          </div>
        </div>
        <div className="my-article-op">
          <Link to={`/article/${ this.props.item }`}>预览</Link>
          <Popconfirm title="确定要删除吗?" onConfirm={ () => this.props.delArticle(this.props.item) } onCancel={ () => { } } okText="确认" cancelText="取消">
            <a href="javascript;">删除</a>
          </Popconfirm>
          <Link to={{pathname: '/article/edit', state: {article: this.props.item }}}>编辑</Link>
        </div>
      </div>
    );
  }

  static propTypes = {
    item: PropTypes.number,
    delArticle: PropTypes.func
  };
}

export default Item;
