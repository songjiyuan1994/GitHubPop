import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    FlatList
} from 'react-native';
import DataRepository from "../dao/DataRepository";
import * as style from "../../res/styles/GlobalStyles";
import RepositoryCell from '../view/RepositoryCell'

const URL = 'https://api.github.com/search/repositories?q=';
const QUERY_STR = '&sort=stars';
export default class PopularTab extends Component<Props> {
    constructor(props) {
        super(props);
        this.dataRepository = new DataRepository();
        this.state = {
            result: '',
            isRefreshing: false,
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({isRefreshing: true});
        let url = URL + this.props.tabLabel + QUERY_STR;
        this.dataRepository.fetchNetRepository(url)
            .then(result => {
                this.setState({
                    result: result.items,
                    isRefreshing: false
                });
            })
            .catch(error => {
                this.setState({
                    isRefreshing: false
                });
                console.error(error)
            })
    }

    render() {
        return (
            <View style={style.container}>
                <FlatList
                    data={this.state.result}
                    ListHeaderComponent={() => <View style={styles.header}/>}
                    ListFooterComponent={() => <Text style={styles.footer}>
                        {this.state.isRefreshing ? '' : 'No More'}</Text>}
                    renderItem={({item}) => <RepositoryCell data={item}/>}
                    onRefresh={() => this.loadData()}
                    refreshing={this.state.isRefreshing}
                />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    header: {
        height: 5
    },
    footer: {
        fontSize: 13,
        padding: 10,
        color: '#999999',
        textAlign: 'center'
    }
});
