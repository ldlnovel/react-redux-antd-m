import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import '../assets/less/playaudio.less'


export default class Playaudio extends Component {


  togglemusic() {
    this.props.toggleplay();
    this.play();
  }
  //  播放切换
  play() {
    let audioNode = ReactDOM.findDOMNode(this.refs.audioPlay);
    // console.log(this.props.playmusic.isplay);
    if(this.props.playmusic.isplay){
      audioNode.play();
    }else{
      audioNode.pause();
    }
  }
  // 展示播放列表
  toggleplaymusic() {
    this.props.playmusiclist();
  }
  componentDidMount() {
    let that = this;
    let updatetime =this.props.updatetime;
    let audioNode = ReactDOM.findDOMNode(this.refs.audioPlay);
    function timeUpdate() {
      let playtime = Math.ceil(audioNode.currentTime);
      that.props.updatetime(playtime);

  }
  this.timeUpdate = timeUpdate;
  audioNode.addEventListener("timeupdate", this.timeUpdate);
  }
  render() {
    let playmusic = this.props.playmusic;
    let musicxq = this.props.musicxq;
    let lyric = this.props.lyric;
    let playtime = this.props.playtime;
    let audiolyric = '';
    lyric.map((el,i) => {
			if (playtime > lyric[i].time){
        audiolyric = lyric[i].clause;
			}
		})
    return (
      <div className="palyaudio">
        {
          <div>
            <div>
                <div className='play-img'>
                  <Link  to="/Playlyric" >
                    <img src={musicxq.songs[0].al.picUrl} alt=""/>
                  </Link>
                </div>
                <div className='play-gec'>
                  <Link  to="/Playlyric" >
                    <h2 className='music-name'>{musicxq.songs[0].name}</h2>
                    <h2 className='music-lyric'>{audiolyric}</h2>
                  </Link>
                </div>
                <div className='play-toggle' onClick={this.togglemusic.bind(this)}>
                  <i className={!playmusic.isplay?'iconfont  icon-D-bianjishipin-shezhizhuti':'iconfont  icon-bofang'}></i>
                </div>
                <div className='play-li' onClick={this.toggleplaymusic.bind(this)}>
                  <i className='iconfont  icon-gedan'></i>
                </div>
              </div>
              <audio autoplay='autoplay' loop="loop"  src={playmusic.music[0].url} ref="audioPlay"></audio>
          </div>
        }
      </div>
    )
  }
}
