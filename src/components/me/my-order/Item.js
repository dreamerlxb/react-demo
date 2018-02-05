import React from 'react';
// import PropTypes from 'prop-types';
import './Item.css';

export default class Item extends React.Component {
  // static propTypes = {
  //   item: PropTypes.number // 一个报名信息
  // };

  // constructor(props) {
  //   super(props);
  //   this.handleMenuClick = this.handleMenuClick.bind(this);
  // }

  // handleMenuClick = d => console.log(d);

  render() {
    return (
      <div className="cmpt-info">
        <div className="pic">
          <img alt="" className="coverImg" src="http://placehold.it/100X100" />
        </div>
        <div className="main">
          <div>
            <p className="cmptName">This is a title !!!</p>
            <p className="items roadName">This is a subtitle</p>
          </div>
          <p className="price">
            <strong className="unitPrice">￥ 2000</strong>
          </p>
        </div>
      </div>
    );
  }
}
