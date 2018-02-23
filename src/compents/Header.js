import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import '../assets/less/header.less'



export default class Header extends Component {
    componentWillMount(){
		this.props.ajaxmusic()
	}
    render() {
        return (
            <div className='m-top' >
                <i className='iconfont icon-caidan'></i>
                        <div className='m-top-m'>
                            <div><NavLink to="/Mymucis" className='iconfont icon-yinyue' activeclassname='active'></NavLink></div>
                            <div><NavLink to="/Recommend" className='iconfont icon-wangyiyunyinle' activeclassname='active'></NavLink></div>
                            <div><NavLink to="/Myorder" className='iconfont icon-partner' activeclassname='active'></NavLink></div>  
                        </div>
                <div><NavLink  to="/Serch" className='iconfont icon-shousuo'></NavLink></div>
            </div>
        )
    } 
}
