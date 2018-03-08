import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import NavigationBar from "../view/NavigationBar";
export default class DetailScreen extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <NavigationBar
                    title={'boy'}
                />
                <Text style={{fontSize: 20}}>detail</Text>
            </View>
        );
    }
}
