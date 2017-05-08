import React, {Component} from 'react';
import {connect} from 'dva';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class Home extends Component {
    render() {
        const {home} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    {home.homeTitle}
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
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