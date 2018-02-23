
  import * as api from '../api'
  
  export const LOGIN = "LOGIN"

  let log = (res,bool) => {
    return {
      type: LOGIN,
      bool
    }
  }  

  export function Login(n,s)  {
    return function (dispatch) {
      api.telLogin(n,s).then( res =>{
        dispatch(log(res))
      })
    }
  }

  export const SERCH = 'SERCH'

  let serch = (key) => {
    return {
      type: SERCH,
      key
    }
  }

  export function serchmusic(key) {
    return function (dispatch) {
      api.search(key).then(res => {
        let list = res.data.result.songs
        // console.log(list)
        dispatch(serch(list))
      })
    }
  }
    

  export const SETMUSIC = 'SETMUSIC'
  
    let setmusic = (list,musicxq) => {
      return {
        type: SETMUSIC,
        list,
        musicxq
      }
    }
  
  export function setplay(id) {
    return function (dispatch) {
      api.getmusic(id).then(res => {
        let list = res.data.data
        // console.log(list)
        api.getmusicxq(id).then(res => {
          let musicxq = res.data
          // console.log(musicxq)
          dispatch(setmusic(list,musicxq))
        })
      })
    }
  }

  export const TOOGLE = 'TOOGLE'
  
  export let toggleplay = () => {
    return {
      type: TOOGLE,
    }
  }

  export const TOOGLEPLAYMUSCI = "TOOGLEPLAYMUSCI"
  
  export let playmusic = (lyric) => {
    return {
      type : TOOGLEPLAYMUSCI,
      lyric
    }
  }
  
  export function getLyric(id) {
    return function (dispatch) {
      api.getmusiclyric(id).then(res => {
        let lyrics = res.data.lrc.lyric.split("\n");
        let lrcArr = [];
        for(let i=0;i<lyrics.length;i++){
            let lyric = decodeURIComponent(lyrics[i]); //解码
            let timeReg = /\[\d*:\d*((\.|\:)\d*)*\]/g;
            let timeRegExpArr = lyric.match(timeReg);
            if(!timeRegExpArr)continue;
            let clause = lyric.replace(timeReg,''); //歌词
            for(let k = 0,h = timeRegExpArr.length;k < h;k++) {
                let t = timeRegExpArr[k];
                let min = Number(String(t.match(/\[\d*/i)).slice(1));
                let sec = Number(String(t.match(/\:\d*/i)).slice(1));
                let time = min * 60 + sec; //时间  m
                lrcArr.push({time,clause})
            }
        }
        dispatch(playmusic(lrcArr))
      })
    }
  }

  // 跟新播放时间
  export const UPDATETIME = "UPDATETIME"
  
  export let updatetime = (playtime) => {
    return {
      type : UPDATETIME,
      playtime
    }
  }
  // 音乐
  export const PERSONALIZED = 'PERSONALIZED'
  
    let personalizeds = (personalized) => {
      return {
        type: PERSONALIZED,
        personalized,
      }
    }
  export const NEWSONG = 'NEWSONG' 
    let newsongs = (newsong) => {
      return {
        type: NEWSONG,
        newsong,
      }
    }
  
  export const DJPROGRAN = 'DJPROGRAN' 
  let djprograms = (djprogram) => {
    return {
      type: DJPROGRAN,
      djprogram,
    }
  }

  export const PRIVATECONTENT = 'PRIVATECONTENT' 
  let privatecontents = (privatecontent) => {
    return {
      type: PRIVATECONTENT,
      privatecontent,
    }
  }

  export const PTMV = 'PTMV' 
  let ptmvs = (ptmv) => {
    return {
      type: PTMV,
      ptmv,
    }
  }
  export function ajaxmusic() {
    return function (dispatch) {     
      api.personalized().then(res => {
        let personalized = res.data.result
        // console.log(personalized)
        let a = []
        for( let k in personalized){
          if(k<6){
            a.push(personalized[k])
          }
        }
        dispatch(personalizeds(a))
        // console.log(a)
      })
      api.newsong().then(res => {
        let newsong = res.data.result
        let a = []
        for( let k in newsong){
        if(k<6){
          a.push(newsong[k])
        }  
        }
        dispatch(newsongs(a))
      })
      api.djprogram().then(res => {
        let djprogram = res.data.result
        let a = []
        for( let k in djprogram){
        a.push(djprogram[k])
        }
        dispatch(djprograms(a))
      })
      api.privatecontent().then(res => {
        let privatecontent = res.data.result
        // console.log(res)
        let a = []
        for( let k in privatecontent){
        if(k<2) {
          a.push(privatecontent[k])
        }
        }
        dispatch(privatecontents(a))
      })
      api.ptmv().then(res => {
        let ptmv = res.data.result
        let a = []
        for( let k in ptmv){     
        a.push(ptmv[k])
        }
        dispatch(ptmvs(a))
      })
    }
  }

  // 歌单详情
  export const SONGLISTDETAILS = 'SONGLISTDETAILS' 
  let Songlistdetails = (list) => {
    return {
      type: SONGLISTDETAILS,
      list,
    }
  }

  export function Songlist (id) {
    return function (dispatch) {
      api.Songlistdetails(id).then(res => {
        let list = res.data
        dispatch(Songlistdetails(list))
        // console.log(list)
      })
    }
  }
  // mv 详情
  export function getmv (id) {
    return function (dispatch) {
      api.mvmvid(id).then(res => {
        let mvxq = res.data.data;
        // console.log(mvxq)
        let mvgs = mvxq.brs;
        // console.log(mvgs)
        for(let k in mvgs) {
          if(k = 720 ){
            mvxq.mv = mvgs[k]
            // console.log(mvgs[k])
          }
        }
        dispatch(mv(mvxq))
      })
    }
  }
  export const GETMV="GETMV" 
  let mv = (mvxq) => {
    return {
      type: GETMV,
      mvxq
    }
  }