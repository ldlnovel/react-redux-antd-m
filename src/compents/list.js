import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as TodoActions from '../actions'
import Loding from './loding.js'
import '../assets/less/list.less'


 class List extends Component {
  constructor(props){
    super(props)
    this.state = {
      playid:''
    }
  }

  playid(id) {
    this.setState({playid : id})
    this.props.actions.setplay(id);
    this.props.actions.getLyric(id);
  }

  render() {
    let list = this.props.list || [];
    // console.log(list+'list');
    return(
        <div className="main">
          {   
              list?list.map((el,i) => {
                return (
                <div className='my-gedan' key={i}>
                  <div className='my-gedan-img'>{i}</div>
                  <div className='my-gedan-xq'>
                    <div onClick={() => this.playid(list[i].id)}>
                      <p>{list[i].name}</p>
                      <i>{list[i].artists[0].name}</i>
                    </div>
                    <i className={this.state.playid === list[i].id?'iconfont icon-shengyin-copy-copy':'iconfont icon-Group '}></i>
                  </div>
                </div>    
                )
              }): 
              < Loding/>
             

          }
        </div>
    )
  }
}

export default connect(
  state => ({music: state}),
  dispatch => ({actions: bindActionCreators(TodoActions, dispatch)})
  )(List)
  