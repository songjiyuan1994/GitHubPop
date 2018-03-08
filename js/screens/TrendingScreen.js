import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class TrendingScreen extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{fontSize:20}}>trending</Text>
            </View>
        );
    }
}
