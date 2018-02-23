import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.withCredentials = false;

// 手机登陆
export const telLogin = (phone, password) => axios.get(`login/cellphone?phone=${phone}&password=${password}`)

// 获取用户信息
export const getUserInfo = uid => axios.get(`user/detail?uid=${uid}`);

// 获取用户电台
export const getUserDj = uid => axios.get(`user/audio?uid=${uid}`);

// 获取用户听歌记录
export const getUserRecord = (uid, type = 0) => axios.get(`user/record?uid=${uid}&type=${type}`);

// 获取用户歌单
export const getUserPlaylist = uid => axios.get(`user/playlist?uid=${uid}`);

// 获取歌曲信息
export const getmusic = id => axios.get(`/music/url?id=${id}`);

// 获取歌曲详情
export const getmusicxq = id => axios.get(`/song/detail?ids=${id}`);

// 推荐歌单
export const personalized = id => axios.get(`/personalized`);

// 推荐新音乐
export const newsong = id => axios.get(`/personalized/newsong`);

// 推荐电台
export const djprogram = id => axios.get(`/personalized/djprogram`);

// 推荐节目
export const Recommendnew = id => axios.get(`/program/recommend`);

// 独家放送
export const privatecontent = id => axios.get(`/personalized/privatecontent`);

// 推荐mv
export const ptmv = id => axios.get(`/personalized/mv`);
// mv 排行
export const topmv = id => axios.get(`top/mv?limit=10`);


// 获取 mv 数据
export const mvmvid = id => axios.get(`/mv?mvid=${id}`);

// 播放 mv  /mv/url?

export const geturl = url => axios.get(`/mv/url?url=${url}`);

// 获取歌单详情
export const Songlistdetails = id => axios.get(`/playlist/detail?id=${id}`);


export const getmusiclyric = id => axios.get(`/lyric?id=${id}`);

// 搜索
export const search = (keywords, type = 1, offset = 0, limit = 30) => axios.get('search', {
  params: {
    keywords,
    offset: offset * limit,
    limit,
    type,
  },
});

