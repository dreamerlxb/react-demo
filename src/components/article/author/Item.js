import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import './Item.css';

class Item extends Component {
  render() {
    return (
      <li className="author_item">
        <div className="author_itemtop">
          <div className="con_img">
            <img src="http://wx.qlogo.cn/mmopen/RlibX8Gy6e90L27zz6TXMMu7QX8h8aEofA0q2oqkIVmQhoatlmAe7suKFTxj7kibg1ib4v47eOTEkBRn7G8PrT3gYEg6vC9P8S7/0" alt="申中" />
          </div>
          <div className="con_info">
            <span>申中</span>
          </div>
        </div>
        <div className="author_itembot">
          <div className="pop_hot_num">
            <span >热度：5570</span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span style={{textAlign: 'right'}}>总量：16篇</span>
          </div>
          <a href="javascript;">去看看</a>
          <div className="pop_rank">
            <p>人气NO.<span>1</span></p>
          </div>
        </div>
      </li>
    );
  }
}

export default Item;
