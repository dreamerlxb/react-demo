import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Item from './Item';
import './index.css';

/**
 * 受欢迎的作者
 */
class PopularAuthor extends Component {

  getOptions() {
    return [1, 2, 3, 4, 5, 6].map(item => {
      return (
        <Item />
      );
    });
  }

  render() {
    return (
      <div style={{marginTop: '50px'}}>
        <ul>
          {this.getOptions()}
        </ul>
      </div>
    );
  }
}


export default PopularAuthor;
