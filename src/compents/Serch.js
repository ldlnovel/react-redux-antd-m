import React, {Component} from 'react'
import '../assets/less/serch.less'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'

import List from './list'


 class Serch extends Component {
  constructor(props){
    super(props)
    this.state = {
      val:'',
    }
  }

  black() {
    this.props.history.goBack();
  }

  change (e) {
    this.setState({
      val: e.target.value
    })
  }

  serch(e) {
    // console.log(this)
    if(e.target.value !==''){
      if (e.which === 13){
        // console.log(actions.serchmusic)
        this.props.actions.serchmusic(e.target.value)
        this.setState({
          val: ''
        })
      }
    }
  }

  render() {
    
    let list = this.props.music.data.musicArr
    // console.log(list);
    return(
      <div className='Serch'>
        <div className='head'>
          <i className="iconfont icon-fanhui" onClick={this.black.bind(this)}></i>
          <input type="text"  placeholder="音乐丶 视频 丶 歌词丶 电台"  value={this.state.val}  onChange={this.change.bind(this)} onKeyDown={this.serch.bind(this)}/>
        </div>
        <List list={list}/>
      </div>
    )
  }
}

export default connect(
  state => ({music: state}),
  dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
  )(Serch)
