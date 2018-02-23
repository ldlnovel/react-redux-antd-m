import React, { Component } from 'react'
import '../assets/less/login.less'

export default class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      phone: '',
      password: '',
    }
  }
 
  login() {
    // console.log('sss')
    if(this.state.phone === ''&&this.state.password === '') return;

    this.props.Login(this.state.phone , this.state.password);
    console.log(this.state.phone ,this.state.password)

  }
  render() {
    // console.log(this.props.islog)
    return (
      <div className='login'>
        <div>
          <label htmlFor="账号">账号:</label>
          <input type="email"  value={this.state.phone}  onChange={e => this.setState({phone: e.target.value})}/>
          <br/>
          <label htmlFor="密码">密码:</label>
          <input type="text" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
          <br/>
          <p><i onClick={this.login.bind(this)}>login</i></p>
        </div>
      </div>
    )
  }
}
