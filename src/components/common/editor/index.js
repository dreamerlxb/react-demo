import React, { Component } from 'react';
import PropTypes from 'prop-types';

class EditorComponent extends Component {
  static propTypes = {
    value: PropTypes.string,
    id: PropTypes.string
  };

  static defaultProps = {
    id: 'myEditor'
  };
  
  componentDidMount() {
    let um = UM.getEditor(this.props.id);
    um.execCommand('insertHtml', this.props.value);
    // um.addListener('blur', function() {
    //   $('#focush2').html('编辑器失去焦点了');
    // });
    // um.addListener('focus', function() {
    //   $('#focush2').html('');
    // });
  }

  // getContent() {
  //   alert(UM.getEditor('myEditor').getContent());
  // }

  render() {
    return (
      <script type="text/plain" id={this.props.id} style={{ width: '1000px', minHeight: '400px', padding: '10px' }}>
        <p>这里我可以写一些输入提示</p>
      </script>
    );
  }
}

export default EditorComponent;
