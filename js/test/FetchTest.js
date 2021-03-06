import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NavigationBar from '../view/NavigationBar'
import HttpUtils from '../utils/HttpUtils';
import DataRepository from "../dao/DataRepository";

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class FetchTest extends Component<Props> {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: '',
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let url = URL + "android" + QUERY_STR;
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result: result.items
                });
            })
            .catch(error => {
                this.setState({
                    result: JSON.stringify(error)
                });
            })
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={this.state.result}
                    renderItem={({item}) => <Text style={{fontSize: 20, Color: 'red'}}>{item.id}</Text>}
                />
            </View>)

    }
}
