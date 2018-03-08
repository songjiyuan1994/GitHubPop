import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    Platform,
    StatusBar
} from 'react-native';
import PropTypes from 'prop-types';

const NAV_BAR_HEIGHT_NADROID = 50;
const NAV_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

export default class NavigationBar extends Component<Props> {
    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
    };

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            hide: false
        };
    }

    render() {
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={navBar.title}>{this.props.title}</Text>;
        let content = <View style={navBar.navBar}>
            {this.props.leftButton}
            <View style={navBar.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>;
        return (
            <View style={navBar.container}>
                {content}
            </View>
        );
    }
}
const navBar = StyleSheet.create({
    container: {
        backgroundColor: 'gray'
    },
    navBar: {
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS === 'ios' ?
            NAV_BAR_HEIGHT_IOS : NAV_BAR_HEIGHT_NADROID,
        flexDirection: 'row'
    },
    title: {
        fontSize: 20
    },
    titleViewContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    }
});
