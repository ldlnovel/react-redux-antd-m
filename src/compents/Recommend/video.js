import React, { Component } from 'react'
import '../../assets/less/video.less'


export default class Video extends Component {


  render() {
    return (
      <div className="Video">
         {/* <div className="title">
         Video
         </div> */}
         <div className="video">
          <video width="100%" height="240" >
              {/* <source src="movie.mp4" type="video/mp4">
              <source src="movie.ogg" type="video/ogg"> */}
              您的浏览器不支持 video 标签。
          </video>
          {/* <i className={!playmusic.isplay?'iconfont  icon-D-bianjishipin-shezhizhuti':'iconfont  icon-bofang'}></i> */}
          <p className='iconfont  icon-D-bianjishipin-shezhizhuti'></p>
         </div>
        <div class="videotitle">
          <p className='one'>拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜拜吧</p>
          <p className='tow'><i className=' iconfont icon-dianzan'></i><i>222</i></p>
          <p className='there'><i className=' iconfont icon-pinlun'></i><i>332</i></p>
          <p className='four'><i className='iconfont icon-Group'></i></p>
        </div>
      </div>
    )
  }
}