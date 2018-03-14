import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import NavigationBar from '../view/NavigationBar'
import HttpUtils from '../utils/HttpUtils';

export default class FetchTest extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            result: ''
        };
    }

    onLoad(url) {
        HttpUtils.get(url)
            .then(result => {
                this.setState({
                    result: JSON.stringify(result)
                });
            })
            .catch(error => {
                console.error(error.toString())
            })
    }

    render() {
        return (
            <View>
                <NavigationBar
                    title={'Fetch'}
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
                    }/>
                <Text style={{fontSize: 20}}
                      onPress={() => this.onLoad("http://onpay.tpddns.cn:88/get/message")}>获取数据</Text>
                <Text style={{fontSize: 20}}>{this.state.result}</Text>
            </View>
        );
    }
}
