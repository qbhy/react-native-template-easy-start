import React, {Component} from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import Home from './routes/home';
import Login from './routes/login';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Scene initial={true} title="首页" key="home" component={Home}/>
                <Scene title="登录" key="login" component={Login}/>
            </Router>
        )
    }
}