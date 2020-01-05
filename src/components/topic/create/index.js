import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {Input, Checkbox, Button, message} from 'antd';
import PicturesWall from '../../common/pictures-wall'
// import Upload from 'antd/lib/upload';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// import { publishWithImages } from '../../../../actions/topics.action';
import { QINIU_URL, LOGIN_USER_ID } from '../../../constants';
import './index.css';
const { TextArea } = Input;

const TOPIC_TITLE_NUM = 40; // 话题的标题个数
const TOPIC_DESC_NUM = 100; // 话题的描述个数
/**
 * 赛客发表的文章
 */
class CreateTopic extends Component {

  constructor(props) {
    super(props);
    this.handleDescChange = this.handleDescChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.createTopic = this.createTopic.bind(this);
    this.state = {
      contentNum: TOPIC_DESC_NUM,
      titleNum: TOPIC_TITLE_NUM,
      isAccept: true,
      uploadFileNum: 0
    };
    this.uploadFiles = [];
  }

  handleTitleChange(e) {
    if (e.target.value.length === TOPIC_TITLE_NUM) {
      message.warning(`最多${TOPIC_TITLE_NUM}的字`);
    }
    this.setState({titleNum: TOPIC_TITLE_NUM - e.target.value.length });
  }

  handleDescChange(e) {
    if (e.target.value.length === TOPIC_DESC_NUM) {
      message.warning(`最多${TOPIC_DESC_NUM}的字`);
    }
    this.setState({contentNum: TOPIC_DESC_NUM - e.target.value.length });
  }

  // 创建一个话题
  createTopic(e) {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    if (title.length === 0) {
      message.warning('话题不能为空');
      return;
    }
    const content = form.desc.value;
    if (content.length === 0) {
      message.warning('话题描述不能为空');
      return;
    }

    if (!this.state.isAccept) {
      message.warning('您需要遵守协议！！');
      return;
    }

    const userId = localStorage.getItem(LOGIN_USER_ID);
    const images = this.uploadFiles.map(item => {
      return {
        mimeType: item.type,
        key: item.id,
        name: item.name,
        url: `${QINIU_URL}${item.target_name}`,
        size: item.size,
        userId
      };
    });
    this.props.publishWithImages({ topic: { title, content, images, userId }});
  }

  render() {
    return (
      <form className="create-topic-container" method="post" onSubmit={this.createTopic}>
        <div className="create-topic-item">
          <label htmlFor="title">话题</label>
          <Input placeholder="#话题#"
              size="large"
              maxLength="40"
              name="title"
              onChange={ this.handleTitleChange }/>
          <span className="content-num">{ this.state.titleNum }字</span>
        </div>
        <div  className="create-topic-item">
          <label htmlFor="desc">描述</label>
          <TextArea placeholder="话题描述"
              size="large"
              maxLength="140"
              name="desc"
              autosize={{minRows: 4, maxRows: 4}}
              onChange={ this.handleDescChange }/>
          <span className="content-num">{ this.state.contentNum }字</span>
        </div>
        <PicturesWall />
        <div className="statement create-topic-item" style={{ textAlign: "left" }}>
          <Checkbox defaultChecked={this.state.isAccept} onChange={ checked => this.setState({ isAccept: checked }) }>
            你已阅读并接受《
            <a href="/enroll/web/index/agreement.html" target="_blank" style={{color: '#ce3939'}}>景鸿科技服务协议</a>
            》和《
            <a href="/enroll/web/index/post_specifiction.html" target="_blank" style={{color: '#ce3939'}}>中华人民共和国规定发帖规范</a>
            》，如果违反协议内容，本站将不承担任何法律责任
          </Checkbox>
        </div>
        <Button type="primary" size="large" style={{width: '100px'}} htmlType="submit">保存 </Button>
      </form>
    );
  }

  static propTypes = {
    publishWithImages: PropTypes.func,
    topic: PropTypes.object
  };
}

export default CreateTopic;

// const mapStateToProps = (state, ownProps) => {
//   return {
//     topic: state.topics.topic
//   };
// };

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return bindActionCreators({ publishWithImages }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CreateTopic);
