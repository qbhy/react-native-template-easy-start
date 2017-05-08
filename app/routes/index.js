import React, {Component} from 'react';
import {Scene, Router, ActionConst} from 'react-native-router-flux';
import Home from './home';
export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Router>
                <Scene initial={true} title="首页" key="index" component={Home}/>
            </Router>
        )
    }
}