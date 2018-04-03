import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';
import Checkbox from 'antd/lib/checkbox';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
// import BraftEditor from 'braft-editor'
// import 'braft-editor/dist/braft.css'

import Editor from '../../editor';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router-dom';
// import MyEditor from '../../../../components/editor';
// import { publishWithImage } from '../../../../actions/articles.action';
import { QINIU_URL, LOGIN_USER_ID } from '../../../constants';

import './index.css';

const Option = Select.Option;

class CreateArticle extends Component {

  componentDidMount() {
    // 动态修改编辑器下的button的type（在浏览器中button的type默认值为submit）
    const btns = document.querySelectorAll(".BraftEditor-controlBar button");
    btns.forEach((btn, index, list) => btn.type = 'button');
    // for(const btn in btns) {
    //   console.log(btn);
    //   btn.type = "button";
    // }
  //   const me = this;
  //   // this.uploadFile = null;
  //   this.uploader = Qiniu.uploader({
  //     runtimes: 'html5,flash,html4',      // 上传模式，依次退化
  //     browse_button: 'upload-article-avatar',         // 上传选择的点选按钮，必需
  //     uptoken_url: `${BASE_URL}Images/uploadToken`,         // Ajax请求uptoken的Url，强烈建议设置（服务端提供）
  //     // get_new_uptoken: false,             // 设置上传文件的时候是否每次都重新获取新的uptoken
  //     domain: 'mz-dx',     // bucket域名，下载资源时用到，必需
  //     // container: 'container',             // 上传区域DOM ID，默认是browser_button的父元素
  //     max_file_size: '10mb',             // 最大文件体积限制
  //     flash_swf_url: 'https://cdn.staticfile.org/plupload/2.1.7/Moxie.swf',
  //     max_retries: 3,                     // 上传失败最大重试次数
  //     dragdrop: true,                     // 开启可拖曳上传
  //     multi_selection: false, // 单张图片
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
  //           console.log('FilesAdded');  //eslint-disable-line
  //           console.log(file);
  //         });
  //       },
  //       BeforeUpload: function(up, file) {
  //         // 每个文件上传前，处理相关的事情
  //         console.log('BeforeUpload');  //eslint-disable-line
  //         console.log(up);
  //         console.log(file);
  //       },
  //       UploadProgress: function(up, file) {
  //         // 每个文件上传时，处理相关的事情
  //         console.log('UploadProgress');  //eslint-disable-line
  //         console.log(up);
  //         console.log(file);
  //       },
  //       FileUploaded: function(up, file, info) {
  //         console.log('FileUploaded'); //eslint-disable-line
  //         // console.log(up); //
  //         console.log(file); // {size: '图片大小', name: '图片的名字', type: '图片类型'}
  //         console.log(info); // 格式：{"hash":"FoOYGEqUohVUIRU3_shTi-2BFrIC","key":"o_1b90g7g009i1hj9edgqorhu57.jpg"}
  //         me.uploadFile = file;
  //         me.uploadInfo = info;
  //         me.setState({imageUrl: `${QINIU_URL}${file.target_name}`});
  //       },
  //       Error: function(up, err, errTip) {
  //         // 上传出错时，处理相关的事情
  //         console.log('Error');  //eslint-disable-line
  //         console.log(up);
  //         console.log(err);
  //         console.log(errTip);
  //         message.error(errTip);
  //       },
  //       UploadComplete: function() {
  //         // 队列文件处理完毕后，处理相关的事情
  //         console.log('UploadComplete');  // eslint-disable-line
  //       }
  //     }
  //   });
  }

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div className="create-title"  style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <span>发布文章</span>
          <span style={{color: 'red', fontSize: '10px'}}>注：您的文章一经审核通过即可获得相应积分，积分可用于礼品兑换，免费名额抽奖等福利。</span>
        </div>
        <form onSubmit={ this.handleSubmit }>
          <div style={{display: 'flex'}}>
            <div style={{display: 'flex', flexDirection: 'column', width: '170px'}}>
              <img alt="" style={{height: '120px', width: '100%'}} src={this.state.imageUrl}/>
              { /* 文件上传 */ }
              <Button id="upload-article-avatar" type="primary" style={{width: '170px', margin: '10px 0 0'}}>
                <Icon type="upload" /> 添加封面图片
              </Button>
              <span style={{background: '#FDFFDD', padding: '5px', fontSize: '12px'}}>上传文章宣传图片，建议尺寸为170x120px，只支持JPG、PNG、GIF，大小不超过2M。</span>
            </div>
            <div style={{width: '20px'}}/>
            <div style={{flexGrow: '1'}}>
              <div className="article-item">
                <label htmlFor="articleTitle">标&emsp;&emsp;题</label>
                <Input type="text" size="large" name="articleTitle" className="article-input" placeholder="请输入文章标题"/>
              </div>
              <div className="article-item">
                <label>文章主题</label>
                <input value={ this.state.articleType } type="hidden" name="articleType"/>
                <Select defaultValue="0" style={{ width: 120 }} size="large" placeholder="请选择..." onChange={ value => this.setState({ articleType: value }) }>
                  <Option value="0">我的日记</Option>
                  <Option value="2">开发指南</Option>
                  <Option value="3">技术分享</Option>
                </Select>
              </div>
              <div className="article-item">
                <label htmlFor="summary">摘&emsp;&emsp;要</label>
                <Input size="large" type="textarea" name="summary" placeholder="请输入文章摘要（可不填）" autosize={{minRows: 3, maxRows: 3}} className="article-input"/>
              </div>
              <div className="article-item">
                <label style={{alignSelf: 'baseline', marginTop: '8px'}} htmlFor="labels">标&emsp;&emsp;签</label>
                <div className="article-input" style={{flexGrow: 1}}>
                  <Input type="text" name="labels" size="large" placeholder="标签1,标签2,..."/>
                  <span>(标签不超过3个，每个标签不超过10个字)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="with-line">文章内容</div>
          <Editor content="111111111"/>
          <div style={{ margin: '0 auto', display: 'block', marginTop: '20px' }}>
            <Checkbox defaultChecked={ this.state.isAccept } onChange={ e => this.setState({ isAccept: e.target.checked }) }> 你已阅读并接受《
              <a href="/web/index/agreement.html" target="_blank">景鸿科技服务协议</a>
              》和《
              <a href="/web/index/post_specifiction.html" target="_blank">国家规定发帖规范</a>
              》，如果违反协议内容，本站将不承担任何法律责任
            </Checkbox>
          </div>
          <div style={{ margin: '20px auto' }}>
            <Button size="large" type="primary" htmlType="submit" disabled={ !this.state.isAccept } style={{ margin: '0 auto', width: '50%', display: 'block' }}>提交</Button>
          </div>
        </form>
      </div>
    );
  }

  state = {
    imageUrl: 'http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg',
    articleType: '0',
    isAccept: true,
    content: null
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const title = form.articleTitle.value;
    if (title.length === 0) {
      message.warning('文章标题不能为空');
      return;
    }
    const labels = form.labels.value;
    if (labels.length === 0) {
      message.warning('文章标签不能为空');
      return;
    }
    const type = form.articleType.value;
    const abstract = form.summary.value;
    // const content = UM.getEditor('myEditor').getContent();
    // if (content.length === 0) {
    //   message.warning('文章内容不能为空');
    //   return;
    // }
    if (!this.uploadFile) {
      message.warning('请上传文章封面图片');
      return;
    }
    const userId = localStorage.getItem(LOGIN_USER_ID);
    const image = {
      mimeType: this.uploadFile.type,
      key: this.uploadFile.id,
      name: this.uploadFile.name,
      url: `${QINIU_URL}${this.uploadFile.target_name}`,
      size: this.uploadFile.size,
      userId
    };
    this.props.publishWithImage({article: { title, abstract, type, tags: labels.split(','), image, userId }});
  }

  static propTypes = {
    publishWithImage: PropTypes.func,
    article: PropTypes.object,
    status: PropTypes.number
  };
}

export default CreateArticle;

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ publishWithImage }, dispatch)
// });

// const mapStateToProps = (state, ownProps) => {
//   return {
//     article: state.articles.article,
//     status: state.articles.status
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(CreateArticle);
