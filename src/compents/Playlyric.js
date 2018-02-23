import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import '../assets/less/playlyric.less'


class Playlyric extends Component {
	constructor(props){
		super(props)
  }

	black() {
    this.props.history.goBack();
	}
	
	render() {
		let lyric = this.props.music.data.lyric;
		let playtime = this.props.music.data.playtime;
		let index = 0;
		let top = 0;
		lyric.map((el,i) => {
			if (playtime > lyric[i].time){
				 index = i;
			}
		})
		top = {
			marginTop:160-index*24+'px',
			transitionDuration:1
		}
		let musicxq = this.props.music.data.musicxq.songs[0].name;
		return (
			<div>
				<div className='playlyricSerch'>
					<div className='head'>
						<i className="iconfont icon-fanhui" onClick={this.black.bind(this)}></i>
						<h2>{musicxq}</h2>
					</div>
      	</div>
				<div className="playlyric">
					<ul style={top}>
						{
							lyric.map((el,i) => {
								return (
									<li className={ index === i?'playNow':'' }>{lyric[i].clause}</li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}
}

export default connect(
	state => ({music: state}),
	dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
	)(Playlyric)
