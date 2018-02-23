import React, { Component } from 'react'
import '../assets/less/Recommend.less'
import { NavLink } from 'react-router-dom';
import misic from '../compents/Recommend/misic'
import video from '../compents/Recommend/video'
import Radio from '../compents/Recommend/Radio'


import { Route } from 'react-router-dom';
export default class Recommend extends Component {

  
  render() {
    return (
        <div className="recommend">
            <div className="title">
              <div><NavLink to="/Recommend/misic" activeClassName="active">音乐</NavLink></div>
              <div><NavLink to="/Recommend/video" activeClassName="active">视频</NavLink></div>
              <div><NavLink to="/Recommend/Radio" activeClassName="active">电台</NavLink></div>
            </div>
            <Route exact  path="/Recommend" component={misic} />
            <Route exact  path="/Recommend/misic" component={misic} />
            <Route exact  path="/Recommend/video" component={video} />
            <Route exact  path="/Recommend/Radio" component={Radio} /> 
        </div>
    )
  }
}