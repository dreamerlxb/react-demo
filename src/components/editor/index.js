import React, { Component } from 'react';
import PropTypes from 'prop-types';

import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

import './index.css';

class Editor extends Component {

  componentDidMount() {
    // 动态修改编辑器下的button的type（在浏览器中button的type默认值为submit）
    const btns = document.querySelectorAll(".BraftEditor-controlBar button");
    btns.forEach((btn, index, list) => btn.type = 'button');
  }

  render() {
    const editorProps = {
      height: 500,
      placeholder: this.props.content,
      onChange: this.handleChange,
      onHTMLChange: this.handleHTMLChange,
      media: {
        allowPasteImage: true, // 是否允许直接粘贴剪贴板图片（例如QQ截图等）到编辑器
        image: true, // 开启图片插入功能
      },
      controls: [
        'undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing',
        'indent','text-color', 'bold', 'italic', 'underline', 'strike-through',
        'superscript', 'subscript', 'remove-styles', 'emoji', 'text-align', 'split', 'headings', 'list_ul',
        'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'hr', 'split', 'media', 'clear'
      ],
      extendControls: [{
        type: 'split',
      }, {
        type: 'button',
        text: '预览',
        className: 'preview-button',
        onClick: () => {
          const txt = this.editorInstance.getHTMLContent();
          console.log('txt = ', txt);
          window.open().document.write(txt)
        }
      }, {
        type: 'modal',
        text: 'Modal',
        className: 'modal-button',
        modal: {
          id: 'test-modal',
          title: '这是一个弹出框',
          showClose: true,
          showCancel: true,
          showConfirm: true,
          confirmable: true,
          onConfirm: () => console.log(1),
          onCancel: () => console.log(2),
          onClose: () => console.log(3),
          children: (
            <div style={{width: 480, height: 320, padding: 30}}>
              <span>Hello World！</span>
            </div>
          )
        }
      }]
    }

    return (<BraftEditor ref={instance => this.editorInstance = instance} {...editorProps}/>);
  }

  handleChange = content => {
    console.log('content = ', content)
  }

  handleHTMLChange = html => {
    console.log('html = ', html)
  }

  static propTypes = {
    content: PropTypes.string,
  };
}

export default Editor;
