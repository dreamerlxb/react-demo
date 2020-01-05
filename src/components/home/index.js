import React from 'react';
import {Carousel, Button} from 'antd';
import mqtt from 'mqtt';

import './index.css';
import {LeftCircleOutlined, RightCircleOutlined} from "@ant-design/icons";

export default class Home extends React.Component {

  componentDidMount() {
    const options = {
      clientId: 'operator_1',
      username: 'admin',
      password: '123456',
      connectTimeout: 30 * 1000,
    };
    const client = mqtt.connect('ws://127.0.0.1:3005', options);

    client.on('connect', function () {
      client.subscribe('monit/1');
      client.publish('monit/1', 'Hello mqtt')
    });

    client.on('message', function (topic, message) {
      // message is Buffer
      console.log('topic', topic);
      console.log(message.toString());
      client.end()
    })
  }

  render() {
    const spanStyle = {
      position: 'abstract',
      zIndex: 1,
      display: this.state.show ? 'block' : 'none'
    };
    const imgStyle = {
      width: '100%', height: 500
    };
    return (
      <div className="templates-wrapper"
        onMouseEnter={() => this.setState({ show: true })}
        onMouseLeave={() => this.setState({ show: false })}>
        <span style={{ left: 0, ...spanStyle }}>
          {/*"left-circle"*/}
          <Button shape="circle" icon={<LeftCircleOutlined/>} onClick={() => this.carousel.prev()} />
        </span>
        <Carousel ref={c => this.carousel = c} afterChange={this.handleCarouselChange}>
          <div>
            <img style={imgStyle} alt="" src="http://b.hiphotos.baidu.com/image/pic/item/71cf3bc79f3df8dc086b64dfc611728b4710282e.jpg" />
          </div>
          <div>
            <img style={imgStyle} alt="" src="http://a.hiphotos.baidu.com/image/pic/item/6a63f6246b600c33e7893586114c510fd8f9a188.jpg" />
          </div>
          <div>
            <img style={imgStyle} alt="" src="http://g.hiphotos.baidu.com/image/pic/item/7aec54e736d12f2e2f257a2e44c2d56285356858.jpg" />
          </div>
          <div>
            <img style={imgStyle} alt="" src="http://d.hiphotos.baidu.com/image/pic/item/d50735fae6cd7b896506d1cd042442a7d9330e12.jpg" />
          </div>
        </Carousel>
        <span style={{ right: 0, ...spanStyle }}>
          <Button shape="circle" icon={<RightCircleOutlined/>} onClick={() => this.carousel.next()} />
        </span>
      </div>
    );
  }
  state = {
    show: false
  };

  handleCarouselChange = (a, b, c) => {
    console.log(a, b, c);
  }
}
