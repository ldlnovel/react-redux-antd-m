import React, { Component } from 'react'
import "../../assets/less/music.less"
import { Carousel } from 'antd-mobile'; 
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../../actions'
import sss from '../../img/sss.jpg'
import { Songlistdetails } from '../../api/index';
import { NavLink } from 'react-router-dom';
import Loding from '../loding.js'

class Misic extends Component {
	constructor(props) {
		super(props)
	}
	
	componentDidMount(){
		
	}

	Songlistdetails (id) {
		this.props.actions.Songlist(id)
	}
	Getmv(id) {
		// console.log(id)
		this.props.actions.getmv(id)
	}

  render() {
		let personalized = this.props.music.data.personalized// 推荐歌单
		let newsong = this.props.music.data.newsong // 推荐新音乐
		let privatecontent = this.props.music.data.privatecontent // 独家放送
		let ptmv = this.props.music.data.ptmv // 推荐mv
    let djprogram = this.props.music.data.djprogram // 推荐电台
    return (
      <div className="Misic">
				<Carousel autoplay infinite ='true'>
					<div><img src='http://p1.music.126.net/VgeZqbKxQ1lppnaJDKh-vw==/109951163145196321.jpg' alt=""/></div>
					<div><img src='http://p1.music.126.net/beXypMUBVrEBt1DBsRqY0g==/109951163145195254.jpg' alt=""/></div>
					<div><img src='http://p1.music.126.net/-0wii0H6JjPV0Qwj8ZPE1w==/109951163142159144.jpg' alt=""/></div>
					<div><img src='http://p1.music.126.net/O873Atapr40G-AyUV-FRVw==/109951163145201027.jpg' alt=""/></div>
				</Carousel>
        <div>
          <div className="title">推荐歌单 <span>></span></div>
          <div className="content clearfloat">
						{
							personalized?personalized.map((ei,i) => {
								return (
									<div>
										<NavLink to="/Musiclist">
											<div onClick={() => this.Songlistdetails(personalized[i].id)}>
												<div className="number "><span className="iconfont icon-erji bigspan"></span>122万</div>
												<img src={personalized[i].picUrl} alt=""/>
												<p>{personalized[i].name}</p>
											</div>
										</NavLink>
									</div>
								)
              }):
              <Loding />
						}
          </div>
					{/* 独家 */}
					<div className="title">独家放送 <span>></span></div>
					<div className="content clearfloat">
           {
						 privatecontent?privatecontent.map((e,i) => {
							return (
								<div style={{width:'50%'}} onClick={() => this.Getmv(privatecontent[i].id)}>
									<NavLink to="/Playvideo">
										<div className="townborder">
											<div className="number"><span className="iconfont  icon-D-bianjishipin-shezhizhuti"></span></div>
											<img src={privatecontent[i].sPicUrl} alt=""/>
											<p>{privatecontent[i].name}</p>
										</div>
									</NavLink>	
								</div>		
							)
             })
             :<Loding />
					 }		
          </div>
					{/* 最新 */}
					<div className="title">最新音乐 <span>></span></div>
					<div className="content clearfloat">
						{
							newsong?newsong.map((e,i) => {
								return (
									<div>
										<NavLink to="/Musiclist">
											<div>
												<div className="number"><span className="iconfont icon-erji"></span>129万</div>
												<img src={newsong[i].song.album.picUrl} alt=""/>
												<p>{newsong[i].name}</p>
											</div>
										</NavLink>
									</div>
								)
              }):
              <Loding />
						}
					</div>
					{/* 推荐mv */}
					<div className="title">推荐mv <span>></span></div>
					<div className="content clearfloat">
						{
							ptmv?ptmv.map((e,i) => {
								return (
									<div style={{width:'50%'}} onClick={() => this.Getmv(ptmv[i].id)}>
										<NavLink to="/Playvideo">
											<div>
												<div className="number"><span className="iconfont  icon-D-bianjishipin-shezhizhuti"></span></div>
												<img src={ptmv[i].picUrl} alt=""/>
												<p>{ptmv[i].name}</p>
											</div>
										</NavLink>
									</div>
								)
						}): 
            <Loding />
						}
					</div>	
        </div>
     </div>
   )
   }
 }

 export default connect(
  state => ({music: state}),
  dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
  )(Misic)


