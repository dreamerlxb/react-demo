import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'antd/lib/input';
import Checkbox from 'antd/lib/checkbox';
import Button from 'antd/lib/button';
import message from 'antd/lib/message';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
// import { publishWithImages } from '../../../../actions/topics.action';
import { QINIU_URL, LOGIN_USER_ID } from '../../../constants';
import './index.css';

const TOPIC_TITLE_NUM = 40; // 话题的标题个数
const TOPIC_DESC_NUM = 100; // 话题的描述个数
/**
 * 赛客发表的文章
 */
class CreateTopic extends Component {
  static propTypes = {
    publishWithImages: PropTypes.func,
    topic: PropTypes.object
  };

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

  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   if (nextProps.topic && nextProps.topic.id) {
  //     browserHistory.push('/racer-say/topic');
  //     return false;
  //   }
  //   return true;
  // }

  // setFileUploader() {
  //   const me = this;
  //   this.uploader = Qiniu.uploader({
  //     runtimes: 'html5,flash,html4',      // 上传模式，依次退化
  //     browse_button: 'topics-upload-images',         // 上传选择的点选按钮，必需
  //     uptoken_url: `${BASE_URL}Images/uploadToken`,         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
  //     domain: 'mz-dx',     // bucket域名，下载资源时用到，必需
  //     // container: 'container',             // 上传区域DOM ID，默认是browser_button的父元素
  //     max_file_size: '100mb',             // 最大文件体积限制
  //     flash_swf_url: 'https://cdn.staticfile.org/plupload/2.1.7/Moxie.swf',
  //     max_retries: 3,                     // 上传失败最大重试次数
  //     dragdrop: true,                     // 开启可拖曳上传
  //     // drop_element: 'container',          // 拖曳上传区域元素的ID，拖曳文件或文件夹后可触发上传
  //     chunk_size: '4mb',                  // 分块上传时，每块的体积
  //     unique_names: true,
  //     auto_start: true,                   // 选择文件后自动上传，若关闭需要自己绑定事件触发上传
  //     filters: {
  //       mime_types: [ // 只允许上传图片
  //           { title: 'Image files', extensions: 'jpg,jpeg,gif,png' }
  //       ],
  //       prevent_duplicates: false // 不允许选取重复文件
  //     },
  //     init: {
  //       FilesAdded: function(up, files) {
  //         plupload.each(files, function(file) {
  //           // 文件添加进队列后，处理相关的事情
  //           console.log('FilesAdded');
  //           console.log(file);
  //         });
  //       },
  //       BeforeUpload: function(up, file) {
  //         // 每个文件上传前，处理相关的事情
  //         console.log('BeforeUpload');
  //         console.log(up);
  //         console.log(file);
  //       },
  //       UploadProgress: function(up, file) {
  //         // 每个文件上传时，处理相关的事情
  //         console.log('UploadProgress');
  //         console.log(up);
  //         console.log(file);
  //       },
  //       FileUploaded: function(up, file, info) {
  //         console.log('FileUploaded');
  //         console.log(up); //
  //         console.log(file); // {size: '图片大小', name: '图片的名字', type: '图片类型'}
  //         console.log(info); // 格式：{"hash":"FoOYGEqUohVUIRU3_shTi-2BFrIC","key":"o_1b90g7g009i1hj9edgqorhu57.jpg"}
  //         me.uploadFiles.push(file);
  //       },
  //       Error: function(up, err, errTip) {
  //         // 上传出错时，处理相关的事情
  //         console.log('Error');
  //         message.error(errTip);
  //       },
  //       UploadComplete: function() {
  //         // 队列文件处理完毕后，处理相关的事情
  //         console.log('UploadComplete');
  //         me.setState({uploadFileNum: me.uploadFiles.length});
  //       }
  //     }
  //   });
  // }

   /* eslint-disable */
  // componentDidMount() {
  //   this.setFileUploader();
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if(this.state.uploadFileNum < 9) {
  //     this.setFileUploader();
  //   }
  // }

  renderImages() {
    const options = this.uploadFiles.map(item =>{
      return <li className="topic-img-item" key={item.id}><img src={`${QINIU_URL}${item.target_name}`}/></li>
    });
    if(this.state.uploadFileNum < 9) {
      options.push(<li key={-1} className="topic-img-item"><div id="topics-upload-images" className="add_img create-topic-item"><span className="span1" /><span className="span2" /></div></li>);
    }
    return options;
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
          <span className="content_num">{ this.state.titleNum }字</span>
        </div>
        <div  className="create-topic-item">
          <label htmlFor="desc">描述</label>
          <Input placeholder="话题描述"
              size="large"
              maxLength="140"
              name="desc"
              type="textarea"
              autosize={{minRows: 4, maxRows: 4}}
              onChange={ this.handleDescChange }/>
          <span className="content_num">{ this.state.contentNum }字</span>
        </div>
        <ul className="topic-imgs">
          {this.renderImages()}
        </ul>
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
