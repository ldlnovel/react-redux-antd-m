import React, { Component } from 'react'
import '../assets/less/musiclist.less'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'

import List from './list'
import Csimg from '../img/sss.jpg' 

class Musiclist extends Component {
  constructor(props){
    super(props)
    this.state = {
      playid:''
    }
  }

  playid(id) {
    this.setState({playid : id})
    this.props.actions.setplay(id);
    this.props.actions.getLyric(id);
  }

  black(){
    this.props.history.goBack();
  }

  render() {
    let Songlist = this.props.music.data.Songlistdetails;
    console.log(typeof Songlist)
    return (
      <div className='list-box'>
        <div className="head">
          <i className="iconfont icon-fanhui" onClick={this.black.bind(this)}></i>
          <span>{this.props.music.data.Songtags}</span>
          <div><i  className='iconfont icon-shousuo' ></i><i className='iconfont  icon-Group' ></i></div>
        </div>
        <div className="photograph">
          <img src={this.props.music.data.SonglistcoverImgUrl} alt=""/>
          <div>
              <div>{this.props.music.data.Songlistname}</div>
              <div className="user"><img src={Csimg} alt=""/><p>我真的是难以琢磨></p></div>
          </div>
        </div>
        <div className="setmusic">
         <div className="active" > <i className=' iconfont icon-wodeshoucang'></i> <p>收藏</p></div>
         <div> <i className=' iconfont icon-pinlun'></i><p></p>评论</div>
         <div> <i className=' iconfont icon-fenxiang'></i><p>分享</p></div>
         <div> <i className=' iconfont icon-download'></i><p>下载</p></div>
        </div>
        <div className="listhead">
          <div>
            <i className = "iconfont  icon-D-bianjishipin-shezhizhuti"></i>
            <p>播放全部 <span>(共56首)</span></p>
          </div>
          <div>
            <i className = "iconfont  icon-duoxuan"></i>
            <p>多选</p>
          </div>
        </div>
        <div className="main">
          {
              Songlist.map((el,i) => {
                return (
                <div className='my-gedan' key={i}>
                  <div className='my-gedan-img'>{i}</div>
                  <div className='my-gedan-xq'>
                    <div onClick={() => this.playid(Songlist[i].id)}>
                      <p>{Songlist[i].name}</p>
                      <i>{Songlist[i].al.name}</i>
                    </div>
                    <i className='iconfont  icon-Group '></i>
                  </div>
                </div>    
                )
              })
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state => ({music: state}),
  dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
  )(Musiclist)