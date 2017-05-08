import React, {Component} from 'react';
import {connect} from 'dva';
import {Actions} from 'react-native-router-flux';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {home, dispatch} = this.props;
        return (
            <View style={styles.container}>
                <Text onPress={()=>{
                    Actions.login({});
                }} style={styles.welcome}>
                    {home.homeTitle} ，点击调到登录页。
                </Text>
                <Text style={styles.instructions}>
                    第 {home.count} 次启动应用。
                </Text>
                <Text style={styles.instructions} onPress={()=>{
                    dispatch({type:'home/addCount'});
                }}>
                    点击添加计数器
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

export default connect(state => state)(Home);