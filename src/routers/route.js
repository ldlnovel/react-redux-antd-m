import React, { Component } from 'react'
import Myorder from '../compents/Myorder'
import Recommend from '../compents/Recommend'
import Mymucis from '../compents/Mymucis'
import Musiclist from '../compents/Musiclist'
import Serch from '../compents/Serch'
import Playlyric from '../compents/Playlyric'
import Playvideo from '../compents/Playvideo'


import { Switch, Route } from 'react-router-dom';
export default class SwitchCom extends Component {
    render() {
        return (
            <div style={{height:'100%'}}>
                <Switch>
                    <Route exact path="/" component={Mymucis} />
                    <Route path="/Mymucis" component={Mymucis} />
                    <Route path="/Recommend" component={Recommend} />
                    <Route path="/Myorder" component={Myorder} />
                    <Route path="/Musiclist" component={Musiclist} />
                    <Route path="/Serch" component={Serch} />
                    <Route path="/Playlyric" component={Playlyric} />
                    <Route path="/Playvideo" component={Playvideo} />
                </Switch>
            </div>
        )
    }
}
