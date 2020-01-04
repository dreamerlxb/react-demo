import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Input from 'antd/lib/input';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';
import Checkbox from 'antd/lib/checkbox';
import Icon from 'antd/lib/icon';
import message from 'antd/lib/message';
import Divider from 'antd/lib/divider'
// import BraftEditor from 'braft-editor'
// import 'braft-editor/dist/braft.css'

import Editor from '../../common/editor';

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router-dom';
// import MyEditor from '../../../../components/editor';
// import { publishWithImage } from '../../../../actions/articles.action';
import { QINIU_URL, LOGIN_USER_ID } from '../../../constants';

import './index.css';

const Option = Select.Option;

class CreateArticle extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageUrl: 'http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg',
      articleType: '0',
      isAccept: true,
      content: null
    };
  }

  componentDidMount() {
    // 动态修改编辑器下的button的type（在浏览器中button的type默认值为submit）
    const btns = document.querySelectorAll(".BraftEditor-controlBar button");
    btns.forEach((btn, index, list) => btn.type = 'button');
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
          <Divider dashed>文章内容</Divider>
          <Editor placeholder="文章内容..."/>
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

  // state = {
  //   imageUrl: 'http://a.hiphotos.baidu.com/image/pic/item/500fd9f9d72a6059f550a1832334349b023bbae3.jpg',
  //   articleType: '0',
  //   isAccept: true,
  //   content: null
  // };

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
  };

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
