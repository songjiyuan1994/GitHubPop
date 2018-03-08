import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default class MineScreen extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Text style={{fontSize:20}}>mine</Text>
            </View>
        );
    }
}
