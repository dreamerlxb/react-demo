import React from 'react';
// import PropTypes from 'prop-types';
import './Item.css';

export default class Item extends React.Component {

  render() {
    return (
      <div className="cmpt-info">
        <div className="pic">
          <img alt="" src="http://placehold.it/100X100" />
        </div>
        <div className="main">
          <div>
            <p>This is a title !!!</p>
            <p>This is a subtitle</p>
          </div>
          <p>
            <strong>￥ 2000</strong>
          </p>
        </div>
      </div>
    );
  }
}
