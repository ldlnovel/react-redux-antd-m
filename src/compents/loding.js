import React, { Component } from 'react'
import { ActivityIndicator } from 'antd-mobile';


export default class Loding extends Component {
    constructor(props) {
        super(props)
        this.state = {
          animating: true,
        };
      }
    
      // loding 
      componentWillUnmount() {
        clearTimeout(this.closeTimer);
      }
      showToast = () => {
        this.setState({ animating: !this.state.animating });
        this.closeTimer = setTimeout(() => {
          this.setState({ animating: !this.state.animating });
        }, 1000);
      }

      render() {
				return (
					<div style = {{width:'100%'}}>
         		<ActivityIndicator animating />
         	</div>
				)
			}
    
}