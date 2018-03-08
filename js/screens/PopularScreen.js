import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button
} from 'react-native';
import DetailScreen from './DetailScreen'
import {StackNavigator} from "react-navigation";

export default class PopularScreen extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <Text style={{fontSize: 20}}
                      onPress={() => navigate('Detail')}
                >popular</Text>
            </View>
        );
    }
}

