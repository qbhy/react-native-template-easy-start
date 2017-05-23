import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default class Example extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>
                    简单的例子
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});