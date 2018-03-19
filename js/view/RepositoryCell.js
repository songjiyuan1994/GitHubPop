import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

export default class RepositoryCell extends Component<Props> {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TouchableOpacity>
                <View style={styles.container}>
                    <Text style={styles.title}>{this.props.data.name}</Text>
                    <Text style={styles.content}>{this.props.data.description}</Text>
                    <View style={styles.directionRow}>
                        <View style={[styles.directionRow, {flex: 2.5}]}>
                            <Image style={styles.avatar}
                                   source={{uri: this.props.data.owner.avatar_url}}/>
                            <Text ellipsizeMode='tail' numberOfLines={1}
                            >{this.props.data.owner.login}</Text>
                        </View>
                        <View style={[styles.directionRow, {flex: 1}]}>
                            <Image style={styles.stars}
                                   source={require('../../res/images/ic_star.png')}/>
                            <Text>{this.props.data.stargazers_count}</Text>
                        </View>
                        <View style={[styles.directionRow, {flex: 1}]}>
                            <Image style={styles.stars}
                                   source={require('../../res/images/ic_fork.png')}/>
                            <Text>{this.props.data.forks}</Text>
                        </View>
                        <TouchableOpacity>
                            <Image style={styles.collection}
                                   source={require('../../res/images/ic_uncollection.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.collection}
                                   source={require('../../res/images/ic_collection.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
        borderColor: '#dddddd',
        shadowColor: 'gray',
        shadowOffset: {width: 0.5, height: 0.5},
        shadowOpacity: 0.4,
        shadowRadius: 1,
        elevation: 2
    },
    title: {
        fontSize: 20,
        color: '#212121'
    },
    content: {
        padding: 8
    },
    directionRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    stars: {
        width: 20,
        height: 20,
        marginRight: 5,
        tintColor: '#333333'
    },
    collection: {
        width: 25,
        height: 25,
        marginRight: 5,
        marginLeft: 5,
        tintColor:'red'
    }
});
