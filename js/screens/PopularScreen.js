import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import NavigationBar from "../view/NavigationBar";
import PopularTab from "../view/PopularTab";

export default class PopularScreen extends Component<Props> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={styles.container}>
                <NavigationBar
                    title='Popular'
                    style={{
                        backgroundColor: '#ee6363'
                    }}/>
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}>
                    <PopularTab tabLabel="Java"/>
                    <PopularTab tabLabel="iOS"/>
                    <PopularTab tabLabel="Android"/>
                    <PopularTab tabLabel="JavaScript"/>
                </ScrollableTabView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

