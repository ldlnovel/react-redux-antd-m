import {LOGIN,SERCH,SETMUSIC,TOOGLE,TOOGLEPLAYMUSCI,UPDATETIME,PERSONALIZED,NEWSONG,DJPROGRAN,PRIVATECONTENT,PTMV,SONGLISTDETAILS,GETMV} from '../actions' 
const data ={
  islog:true,
  musicArr:[],
  userlog:[], // 是否登录
  playmusic:{ // 播放歌曲 详情
    music:'',
    isplay:false,
    id:''
  },
  playmusiclist: false, // 是否显示播放列表
  lyric:'', // 当前播放歌词
  newplaylist:'', // 播放列表
  musicxq:'', // 歌曲详情
  playtime:0, // 当前播放时间
  personalized:'', // 推荐歌单
  newsong:'', // 推荐新音乐
	privatecontent:'', // 独家放送
	ptmv:'', // 推荐mv
  djprogram:'', // 推荐电台
  Songlistdetails:[], //推荐歌曲列表 以及 详情
  SonglistcoverImgUrl:'',
  Songlistname:'',
  Songtags:'',
  mvxq: '' // mv 详情
};
const reducers =(state = {data :data}, actions) => {
  switch (actions.type) {
    case LOGIN:
      let data1 = state.data.userlog;
      data1.data.userlog = actions.bool
      // data1.data.userlog = actions.bool
      // console.log("ssss");
      // console.log(actions.bool);
      return Object.assign({}, state, {data:data1})
    case SERCH:
      // console.log(actions.key)
      data.musicArr = actions.key;
      return Object.assign({}, state, {data})
    case SETMUSIC:
      // console.log(actions.list[0].id)
      data.playmusic.music = actions.list;
      data.playmusic.isplay = true;
      data.playmusic.id = actions.list[0].id;
      data.musicxq = actions.musicxq;
      // console.log(actions.musicxq)
      return Object.assign({}, state, {data})
    case TOOGLE:
      data.playmusic.isplay = !data.playmusic.isplay;
      return Object.assign({}, state, {data})
    case TOOGLEPLAYMUSCI:
      data.playmusiclist = !data.playmusiclist;
      data.lyric = actions.lyric;
      return Object.assign({}, state, {data});
    case UPDATETIME:
      data.playtime = actions.playtime;
      return Object.assign({}, state, {data})
    case PERSONALIZED:
      data.personalized = actions.personalized;
      return Object.assign({}, state, {data})
    case NEWSONG:
      data.newsong = actions.newsong;
      return Object.assign({}, state, {data})
    case DJPROGRAN:
      data.djprogram = actions.djprogram;      
      return Object.assign({}, state, {data})
    case PRIVATECONTENT:
      data.privatecontent = actions.privatecontent;
      return Object.assign({}, state, {data})
    case PTMV:
      data.ptmv=actions.ptmv;
      return Object.assign({}, state, {data})
    case SONGLISTDETAILS:
      data.Songlistdetails = actions.list.playlist.tracks;
      data.SonglistcoverImgUrl = actions.list.playlist.coverImgUrl;
      data.Songlistname = actions.list.playlist.name;
      data.Songtags = actions.list.playlist.tags;
      return Object.assign({}, state, {data})
    case GETMV:
      data.mvxq=actions.mvxq;
      return Object.assign({}, state, {data})
    default:
      return state
  }
 }
 export default reducers;
