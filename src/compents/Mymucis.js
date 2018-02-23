import React, { Component } from 'react'
import '../assets/less/mymusic.less'
import Csimg from '../img/sss.jpg' 
import { Link } from 'react-router-dom';

export default class Mymusic extends Component {


  render() {
    return (
      <div className='mymusic-mg'>
        <div className='mymusic-head'>
           <i className='wycolor1 iconfont  icon-zuijbofang ifontsz'></i>
           <div>最近播放<span>(100)</span></div> 
        </div>
        <div className='mymusic-head'>
           <i className='wycolor1 iconfont  icon-download'></i>
           <div>下载管理<span>(100)</span></div> 
        </div>
        <div className='mymusic-head'>
           <i className='wycolor1 iconfont  icon-diantai'></i>
           <div>我的电台<span>(100)</span></div> 
        </div>
        <div className='mymusic-head'>
           <i className='wycolor1 iconfont  icon-wodeshoucang'></i>
           <div>我的收藏<span>(专辑/歌手/视频/专栏)</span></div> 
        </div>
        <div className='my-title'>
          <div className='my-xia'><span className='iconfont  icon-xia gedan-shou'></span></div>
          <div className='my-fonts'>创建歌单<i>(5)</i></div>
          <div className='my-sz'><i className='iconfont  icon-shezhi'></i></div>
        </div>
        <div className='my-gedan'>
          <div className='my-gedan-img'><img src={Csimg} alt=""/></div>
          <div className='my-gedan-xq'>
            <div>
              <p>我喜欢的</p>
              <i>2首</i>
            </div>
            <i className='iconfont  icon-Group '></i>
          </div>
        </div>
        <Link to='/musiclist' className='my-gedan'>
          <div className='my-gedan-img'><img src={Csimg} alt=""/></div>
          <div className='my-gedan-xq'>
            <div>
              <p>我喜欢的</p>
              <i>2首</i>
            </div>
            <i className='iconfont  icon-shengyin-copy-copy '></i>
          </div>
        </Link>
      </div>
    )
  }
}