import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
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
                    title={'详情'}
                    style={{
                        backgroundColor: '#ee6363'
                    }}
                    leftButton={
                        <TouchableOpacity
                            onPress={() => {
                                this.props.navigation.goBack(null);
                            }}>
                            <Image source={require('../../res/images/ic_arrow_back_white_36pt.png')}
                            />
                        </TouchableOpacity>
                    }
                />
                <Text style={{fontSize: 20}}>detail</Text>
            </View>
        );
    }
}
