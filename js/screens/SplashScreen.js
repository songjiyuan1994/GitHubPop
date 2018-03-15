import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import TabBarItem from "../view/TabBarItem";

export default class SplashScreen extends Component<Props> {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigation.navigate('App')
        }, 10)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize: 50, textAlign: 'center'}}
                >Splash</Text>
            </View>
        );
    }
}
