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
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        let url = URL + this.props.tabLabel + QUERY_STR;
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
            <View style={style.container}>
                <FlatList
                    data={this.state.result}
                    renderItem={({item}) => <RepositoryCell data={item}/>}
                />
            </View>
        );
    }
}
