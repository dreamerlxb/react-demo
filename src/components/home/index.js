import React from 'react';
import Carousel from 'antd/lib/carousel';

import './index.css';

export default class Home extends React.Component {
  
  onChange(a, b, c) {
    console.log(a, b, c);
  }
  componentDidMount() {
  }

  render() {
    return (
      <div className="templates-wrapper">
        <Carousel afterChange={this.onChange}>
          <div>
            <img style={{ width: '100%', height: 500 }} alt="" src="http://b.hiphotos.baidu.com/image/pic/item/71cf3bc79f3df8dc086b64dfc611728b4710282e.jpg"/>
          </div>
          <div>
            <img style={{ width: '100%', height: 500 }} alt="" src="http://a.hiphotos.baidu.com/image/pic/item/6a63f6246b600c33e7893586114c510fd8f9a188.jpg"/>
          </div>
          <div>
            <img style={{ width: '100%', height: 500 }} alt="" src="http://g.hiphotos.baidu.com/image/pic/item/7aec54e736d12f2e2f257a2e44c2d56285356858.jpg"/>
          </div>
          <div>
            <img style={{ width: '100%', height: 500 }} alt="" src="http://d.hiphotos.baidu.com/image/pic/item/d50735fae6cd7b896506d1cd042442a7d9330e12.jpg"/>
          </div>
        </Carousel>
      </div>
    );
  }
}
