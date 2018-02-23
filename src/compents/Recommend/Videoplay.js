import React, { Component } from 'react'
import '../../assets/less/video.less'


export default class Videoplay extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let mvxq = this.props.mvxq;
    return (
      <div className="Video">
         {/* <div className="title">
         Video
         </div> */}
         <div className="video">
          <video width="100%" height="240"  autoplay='autoplay' poster={mvxq.cover} src = {'http://v4.music.126.net/20180209121948/385cd1492832466be917f04edae857c7/web/cloudmusic/mv/20180208100131/ccd189f7-7e11-4fb3-b367-9fa2c2106c51/7b204877b2a86b7ec7cbd25e28b46bbf.mp4'}>
              {/* <source src="movie.mp4" type="video/mp4">
              <source src="movie.ogg" type="video/ogg"> */}
              您的浏览器不支持 video 标签。
          </video>
          {/* <i className={!playmusic.isplay?'iconfont  icon-D-bianjishipin-shezhizhuti':'iconfont  icon-bofang'}></i> */}
          <p className='iconfont  icon-D-bianjishipin-shezhizhuti'></p>
         </div>
        <div class="videotitle">
          <p className='one'>{mvxq.briefDesc}</p>
        </div>
      </div>
    )
  }
}