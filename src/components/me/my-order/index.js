import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import Pagination from 'antd/lib/pagination';
import {Button} from 'antd';
// import { bindActionCreators } from 'redux';
// import { fetchEnrolls } from '../../../actions/enrolls.action.js';
// import { fetchCount } from '../../../actions/common.action.js';
// import { LOGIN_USER_ID, FETCH_ENROLLS_TOTAL } from '../../../constants';
import Section from './Section';
import './index.css';
// 100 全部， 101 待支付
class MyOrder extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEdit: false,
      status: 100
    };
  }

  // componentWillMount() {
  //   console.log('componentWillMount');
  //   // const userId = localStorage.getItem(LOGIN_USER_ID);
  //   // this.props.fetchEnrolls({
  //   //   where: {
  //   //     userId
  //   //   },
  //   //   include: {
  //   //     relation: 'items',
  //   //     scope: {
  //   //       include: {
  //   //         relation: 'groupCmpt',
  //   //         scope: {
  //   //           include: ['group', 'cmpt', 'match']
  //   //         }
  //   //       }
  //   //     }
  //   //   },
  //   //   order: 'created DESC',
  //   //   limit: 10,
  //   //   skip: 0
  //   // }); // 获取登陆用户的报名信息
  //   // this.props.fetchCount('Enrolls', FETCH_ENROLLS_TOTAL, {userId});
  // }

  renderSetions() {
    if (this.props.enrolls && this.props.enrolls.length) {
      let lis = this.props.enrolls.map(item => (<li className="section-order-item" key={item}> <Section /> </li>));
      return <ul className="no-list-style">{ lis } </ul>;
    }
    return <div>没有数据</div>;
  }

  render() {
    return (
      <div className="order-form">
        <div className="ordersele">
          <Button type="link" className="" onClick={ () => this.setState({ status: 100 }) }>
            <span>全部</span>
          </Button>
          <span>&nbsp;&nbsp;|&nbsp;&nbsp;</span>
          <Button type="link" className="active" onClick={ () => this.setState({ status: 101 }) }>
            <span>待支付</span>
          </Button>
        </div>
        { this.renderSetions() }
        <div style={{margin: 20}}>
          <Pagination total={this.props.total}/>
        </div>
      </div>
    );
  }

  static propTypes = {
    fetchEnrolls: PropTypes.func,
    fetchCount: PropTypes.func,
    enrolls: PropTypes.array,
    total: PropTypes.number
  };

  static defaultProps = {
    enrolls: [1, 2, 3, 4, 5],
    total: 200
  };
}

export default MyOrder;

// const mapStateToProps = (state) => { // 登陆用户的所有报名信息
//   return {
//     enrolls: state.enrolls.all || [],
//     total: state.enrolls.total
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ fetchEnrolls, fetchCount }, dispatch);
// };
// export default connect(mapStateToProps, mapDispatchToProps)(MyOrder);
