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
                        <View style={[styles.directionRow, {flex: 2}]}>
                            <Image style={styles.avatar}
                                   source={{uri: this.props.data.owner.avatar_url}}/>
                            <Text>Author:{this.props.data.owner.login}</Text>
                        </View>
                        <View style={[styles.directionRow, {flex: 1}]}>
                            <Text>Stars:{this.props.data.stargazers_count}</Text>
                        </View>
                        <Image style={styles.stars}
                               source={require('../../res/images/ic_unstar_navbar.png')}/>
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
        padding: 10
    },
    title: {
        fontSize: 20,
        color: '#212121',
        flexShrink: 1
    },
    content: {
        padding: 8
    },
    directionRow: {
        flexDirection: 'row'
    },
    avatar: {
        width: 20,
        height: 20,
        marginRight: 5
    },
    stars: {
        width: 20,
        height: 20
    }
});
