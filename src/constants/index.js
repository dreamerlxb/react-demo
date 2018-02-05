// match 赛事
export const FETCH_MATCH = 'fetch_match';
export const FETCH_MATCHES = 'fetch_matches';
export const FETCH_MATCHES_TOTAL = 'fetch_matches_total';
export const FETCH_HOT_CITIES = 'fetch_hot_cities';

// group-cmpt 赛项组别
export const FETCH_GROUP_CMPT = 'fetch_group_cmpt';
export const FETCH_GROUP_CMPTS = 'fetch_group_cmpts';

// enroll 报名（相当于是订单）
export const CREATE_ENROLL = 'create_enroll';
export const FETCH_ENROLLS = 'fetch_enrolls';
export const FETCH_ENROLLS_TOTAL = 'fetch_enrolls_total';
export const MULTI_ENROLLS = 'multi_enrolls';

// register 注册
export const REGISTER = 'register';

// logout/login  退出/登陆
export const LOGOUT = 'logout';
export const LOGIN = 'login';
export const AUTH_SUCCESS = 'auth_success';
export const AUTH_FAIL = 'auth_fail';

// user 用户
export const LOGIN_USER_TOKEN = 'login_user_token';
export const LOGIN_USER_ID = 'login_user_id';
export const FETCH_LOGIN_USER = 'fetch_login_user';
export const MODIFY_USER = 'modify_user';
export const SEND_MAIL = 'send_mail';  // 向邮箱发送验证码
export const RESET_PWD = 'reset_pwd'; // 找回密码
export const SET_PWD = 'set_pwd'; // 登陆用户设置新密码

// topic 话题
export const FETCH_TOPICS = 'fetch_topics';
export const FETCH_HOT_TOPICS = 'fetch_hot_topics';
export const FETCH_LATEST_TOPICS = 'fetch_latest_topics';
export const FETCH_TOPIC = 'fetch_topic';
export const CREATE_TOPIC = 'create_topic';
export const DETELE_TOPIC = 'detele_topic';
export const FETCH_TOPICS_TOTAL = 'fetch_topics_total';
export const PUBLISH_TOPIC_WITH_IMAGES = 'publish_topic_with_images';

// article 文章
export const FETCH_ARTICLE = 'fetch_article';
export const FETCH_ARTICLES = 'fetch_articles';
export const FETCH_HOT_ARTICLES = 'fetch_hot_articles';
export const FETCH_LATEST_ARTICLES = 'fetch_latest_articles';
export const DETELE_ARTICLE = 'delete_article';
export const FETCH_ARTICLES_TOTAL = 'fetch_articles_total';
export const PUBLISH_WITH_IMAGE = 'publish_with_image';

// enroll-info常用报名信息
export const FETCH_ENROLL_INFO = 'fetch_enroll_info';
export const FETCH_ENROLL_INFOS = 'fetch_enroll_infos';
export const CREATE_ENROLL_INFO = 'create_enroll_info';
export const UPSERT_ENROLL_INFO = 'upsert_enroll_info';
export const DELETE_ENROLL_INFO = 'delete_enroll_info';

// collection 收藏
export const FETCH_COLLECTION = 'fetch_collection';
export const FETCH_COLLECTIONS = 'fetch_collections';
export const TOGGLE_COLLECTION = 'toggle_collection';
export const FETCH_ARTICLE_COLLECTIONS = 'fetch_article_collections';
export const FETCH_TOPIC_COLLECTIONS = 'fetch_topic_collections';
export const FETCH_MATCH_COLLECTIONS = 'fetch_match_collections';
// 收藏个数
export const FETCH_TOPIC_C_COUNT = 'fetch_topic_collection_count';
export const FETCH_MATCH_C_COUNT = 'fetch_match_collection_count';
export const FETCH_ARTICLE_C_COUNT = 'fetch_article_collection_count';
export const FETCH_COLLECTION_COUNT = 'fetch_collection_count';
// 收藏文章、话题 / 或取消
export const TOGGLE_ARTICLE_C = 'toggle_article_collection';
export const TOGGLE_TOPIC_C = 'toggle_topic_collection';
export const TOGGLE_MATCH_C = 'toggle_match_collection';

// praise 点赞
export const FETCH_PRAISE = 'fetch_praise';
export const FETCH_PRAISES = 'fetch_praises';
export const TOGGLE_PRAISE = 'toggle_praise';
// 点赞/取消点赞
export const TOGGLE_ARTICLE_PRAISE = 'toggle_article_praise';
export const TOGGLE_TOPIC_PRAISE = 'toggle_topic_praise';
// 获取点赞个数
export const FETCH_ARTICLE_P_COUNT = 'fetch_article_praise_count';
export const FETCH_TOPIC_P_COUNT = 'fetch_topic_praises_count';
export const FETCH_PRAISE_COUNT = 'toggle_praise_count';

// comment 评论
export const CREATE_COMMENT = 'create_comment';
export const FETCH_COMMENTS = 'fetch_comments';
export const FETCH_ARTICLE_COMMENTS = 'fetch_article_comments';
export const FETCH_TOPIC_COMMENTS = 'fetch_topic_comments';
export const FETCH_ARTICLE_COMMENT_COUNT = 'fetch_article_comment_count';
export const FETCH_TOPIC_COMMENT_COUNT = 'fetch_topic_comment_count';
export const FETCH_ARTICLE_COMMENT = 'fetch_article_comment';
export const FETCH_TOPIC_COMMENT = 'fetch_topic_comment';

// 回复
export const CREATE_REPLY = 'create_reply';
export const FETCH_REPLIES = 'fetch_replies';
export const FETCH_ARTICLE_REPLIES = 'fetch_article_replies';
export const FETCH_TOPIC_REPLIES = 'fetch_topic_replies';

// 七牛图片url
export const QINIU_URL = 'https://images.mazeal.com/'; // 'http://olepdhrf4.bkt.clouddn.com/';

// url
const BASE_URL = 'http://211.87.227.215:3000/api/';
export default BASE_URL;
