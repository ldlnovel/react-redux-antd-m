import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import SwitchCom from './routers/route'
import Header from './compents/Header'
import Playaudio from './compents/Playaudio'
import Login from './compents/Login'
import NewPlaylist from './compents/NewPlaylist'
import 'antd-mobile/dist/antd-mobile.css'; // antd  直接引入  按需加载 待完成

import { BrowserRouter as Router } from 'react-router-dom';



import * as TodoActions from './actions'

import './assets/less/icon.less'


const App = ({music, actions}) => (
  <div style={{height:'100%'}}>
    {/* {console.log(music.data.newplaylist+'sssss')} */}
     {music.data.islog?<Router serchmusic={actions.serchmusic}>
        <div style={{height:'100%'}}>
            <Header ajaxmusic={actions.ajaxmusic}/>
            <SwitchCom />
            {/* 正在 播放歌曲展示列表 */}
            {music.data.playmusiclist?<NewPlaylist list={music.data.newplaylist}/>:''}
            {music.data.playmusic.music?<Playaudio updatetime={actions.updatetime} musicxq={music.data.musicxq} playmusic={music.data.playmusic} toggleplay={actions.toggleplay} playmusiclist={actions.playmusic} getLyric={actions.getLyric} playtime={music.data.playtime} lyric={music.data.lyric}/>:''}
        </div>
    </Router >: <Login Login={actions.Login} />}
  </div>
)

const mapStateToProps = state => ({
  music:state
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(App)
