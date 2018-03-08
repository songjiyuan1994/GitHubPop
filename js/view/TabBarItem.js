import React, {Component} from 'react';
import {Image} from 'react-native';
import * as styles from "../../res/styles/GlobalStyles";

export default class TabBarItem extends Component {
    constructor(props) {
        super(props);
        this.props = {
            selectedImage: '',
            normalImage: ''
        };
    }

    render() {
        return (
            <Image source={this.props.focused ? this.props.selectedImage : this.props.normalImage}
                   style={[{tintColor: this.props.tintColor}, styles.tabBar_icon]}/>
        )
    }
}
