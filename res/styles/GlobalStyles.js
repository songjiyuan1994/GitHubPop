/**
 * 全局样式
 * @flow
 */
import {
    Dimensions
} from 'react-native'

const {height, width} = Dimensions.get('window');
module.exports = {
    container: {
        flex: 1,
    },
    //
    navigation_bar_style: {
        backgroundColor: 'gray'
    },
    //底部导航栏字体样式
    tabBar_text_selected: {
        color: 'blue'
    },
    //底部导航栏图标默认颜色
    tabBar_icon: {
        width: 22,
        height: 22
    },
    line: {
        height: 0.4,
        opacity: 0.5,
        backgroundColor: 'darkgray',
    },
    root_container: {
        flex: 1,
        backgroundColor: '#f3f3f4',
    },
    backgroundColor: '#f3f3f4',
    nav_bar_height_ios: 44,
    nav_bar_height_android: 50,
    window_height: height,
};
