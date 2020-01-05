import React from 'react';
// import PropTypes from 'prop-types';
// import message from 'antd/lib/message';
import {Divider} from 'antd';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import MyInfoShow from './MyInfo.js';
// import MyInfoEdit from './MyInfoEdit.js';
// import { modifyUserInfo, fetchLoginUser } from '../../../actions/users.action';

import './index.css';
import {ArrowRightOutlined, EditOutlined, ManOutlined} from "@ant-design/icons";

class MyInfo extends React.Component {
  // static propTypes = {
  //   user: PropTypes.object,
  //   status: PropTypes.number,
  //   modifyInfo: PropTypes.object,
  //   modifyUserInfo: PropTypes.func,
  //   fetchLoginUser: PropTypes.func,
  //   modified: PropTypes.bool
  // };

  render() {
    return (
      <div className="person-container">
        <div className="main-top">
          <a className="avatar" href="http://www.jianshu.com/u/cd71ddfdf5bf">
            <img src="http://placehold.it/80X80" alt="240" />
          </a>
          <div className="detail">
            <div className="title">
              <a className="name" href="/u/cd71ddfdf5bf">XXXXX</a>
              <ManOutlined style={{ marginLeft: 5 }} />
            </div>
            <ul className="info">
              <li>
                <a className="meta-block" href="/users/cd71ddfdf5bf/following">
                  <p>11</p>
                  <p>
                    关注 <ArrowRightOutlined />
                  </p>
                </a>
                <Divider type="vertical" />
              </li>
              <li>
                <a className="meta-block" href="/users/cd71ddfdf5bf/followers">
                  <p>0</p>
                  <p>粉丝 <ArrowRightOutlined /></p>
                </a>
                <Divider type="vertical" />
              </li>
              <li>
                <a class="meta-block" href="/u/cd71ddfdf5bf">
                  <p>14</p>
                  <p>文章 <ArrowRightOutlined /></p>
                </a>
                <Divider type="vertical" />
              </li>
              <li>
                <div className="meta-block">
                  <p>4853</p>
                  <div>字数</div>
                </div>
                <Divider type="vertical" />
              </li>
              <li>
                <div className="meta-block">
                  <p>1</p>
                  <div>收获喜欢</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="edit">
            <a className="name" href="/u/cd71ddfdf5bf">
              <EditOutlined style={{ marginLeft: 5, fontSize: 18 }} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default MyInfo;

// const mapStateToProps = (state) => {
//   const { modified, loginUser, modifyInfo, status } = state.users;
//   return { user: loginUser, modified, modifyInfo, status };
// };

// const mapDispatchToProps = (dispatch) => ({
//   ...bindActionCreators({ modifyUserInfo, fetchLoginUser }, dispatch)
// });
// export default connect(mapStateToProps, mapDispatchToProps)(MyInfo);
