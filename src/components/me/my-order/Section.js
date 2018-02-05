import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Item from './Item';
import './Section.css';

export default class OrderItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  handleMenuClick(data) {
    console.log(data); //eslint-disable-line
  }

  caculateCost() {
    if (this.props.items && this.props.items.length) {
      return this.props.items.reduce((p, c) => p + c, 0);
    }
    return 0;
  }

  renderItems() {
    if (this.props.items && this.props.items.length) {
      const lis = this.props.items.map(item => (<li className="order orderDiv" key={item}><Item item={item}/></li>));
      return <ul className="group-cmpt-info">{ lis } </ul>;
    }
    return <div>没有数据</div>;
  }

  render() {
    return (
      <div>
        <div className="order-info">
          <span className="orderNumber">订单号：{ moment().format('YYYYMMDDHHmmss') }</span>
          <span className="orderTime">日期：{ moment().format('YYYY-MM-DD') }</span>
        </div>
        { this.renderItems() }
        <div className="order-pay-info">
          <span className="orderNumber">支付状态：{ this.props.order.isPaid ? '已支付' : '未支付' }</span>&nbsp;&nbsp;&nbsp;
          <a>去支付 >></a>
          <span style={{flexGrow: 1}}/>
          <span className="orderNumber">总费用：{this.caculateCost()}￥</span>
        </div>
      </div>
    );
  }

  static propTypes = {
    order: PropTypes.object, // 一个报名信息
    items: PropTypes.array
  };

  static defaultProps = {
    order: {
      isPaid: true
    }, // 一个报名信息
    items: [
      1, 2, 3
    ]
  };
}
