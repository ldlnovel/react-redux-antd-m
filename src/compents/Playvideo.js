import React, { Component } from 'react'
import Videoplay from './Recommend/Videoplay'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'


class Playvideo extends Component {


  render() {
    let mvxq = this.props.music.data.mvxq;
    return (
      <div>
        <Videoplay mvxq={mvxq}/>
      </div>
    )
  }
}
export default connect(
  state => ({music: state}),
  dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
  )(Playvideo)