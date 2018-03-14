import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    FlatList,
    TouchableOpacity
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
                <TouchableOpacity
                    style={styles.touchable}
                    onPress={() => this.props.navigation.navigate('Fetch')}>
                    <Text style={styles.text}
                    >Fetch</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    touchable: {
        borderWidth: 1,
        margin: 5,
        borderColor: 'blue',
        backgroundColor:'gray'
    },
    text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'center'
    }
});

