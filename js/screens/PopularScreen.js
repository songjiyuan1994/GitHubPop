import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList
} from 'react-native';
import DetailScreen from './DetailScreen'
import {StackNavigator} from "react-navigation";
import NavigationBar from "../view/NavigationBar";

var data = {
    'result': [
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
        {
            "name": "songjiyuan",
            "age": "24"
        },
    ]
};
export default class PopularScreen extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    renderRow(item) {
        return <View>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
        </View>
    }

    refreshing = () => {
        this.setState({
            isLoading: true,
        });

        let timer = setTimeout(() => {
            clearTimeout(timer);
        }, 1000)
    };

    onload() {
        let timer = setTimeout(() => {
            clearTimeout(timer);
            alert('加载成功')
        })
    }


    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{flex: 1}}>
                <FlatList
                    data={data.result}
                    renderItem={({item}) => this.renderRow(item)}
                    ListFooterComponent={() =>
                        <Text style={{fontSize: 25, backgroundColor: 'red'}}>Footer</Text>}
                    ListHeaderComponent={() =>
                        <Text style={{fontSize: 25, backgroundColor: 'red'}}>Header</Text>}
                    ItemSeparatorComponent={() =>
                        <View style={{height: 0.5, backgroundColor: 'yellow'}}/>}
                    onRefresh={this.refreshing}
                    refreshing={this.state.isLoading}
                />
            </View>
        );
    }
}

