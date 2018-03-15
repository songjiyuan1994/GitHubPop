/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {StackNavigator, TabNavigator, SwitchNavigator} from 'react-navigation';
import PopularScreen from './screens/PopularScreen';
import TrendingScreen from './screens/TrendingScreen';
import FavoriteScreen from './screens/FavoriteScreen';
import MineScreen from './screens/MineScreen';
import TabBarItem from './view/TabBarItem';
import DetailScreen from './screens/DetailScreen';
import FetchTest from "./test/FetchTest";
import SplashScreen from "./screens/SplashScreen";

class App extends Component<Props> {
    constructor(props) {
        super(props);
    }
}

const MainScreenNavigator = TabNavigator({
    PopularScreen: {
        screen: PopularScreen,
        navigationOptions: {
            tabBarLabel: 'Popular',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../res/images/ic_popular.png')}
                    selectedImage={require('../res/images/ic_popular.png')}
                />
            ),
        }
    },
    TrendingScreen: {
        screen: TrendingScreen,
        navigationOptions: {
            tabBarLabel: 'Trending',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../res/images/ic_trending.png')}
                    selectedImage={require('../res/images/ic_trending.png')}
                />
            ),
        }
    },
    FavoriteScreen: {
        screen: FavoriteScreen,
        navigationOptions: {
            tabBarLabel: 'Favorite',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../res/images/ic_favorite.png')}
                    selectedImage={require('../res/images/ic_favorite.png')}
                />
            ),
        }
    },
    MineScreen: {
        screen: MineScreen,
        navigationOptions: {
            tabBarLabel: 'Mine',
            tabBarIcon: ({focused, tintColor}) => (
                <TabBarItem
                    tintColor={tintColor}
                    focused={focused}
                    normalImage={require('../res/images/ic_my.png')}
                    selectedImage={require('../res/images/ic_my.png')}
                />
            ),
        }
    },
}, {
    animationEnabled: false, // 切换页面时不显示动画
    tabBarPosition: 'bottom', // 显示在底端，android 默认是显示在页面顶端的
    swipeEnabled: false, // 左右滑动
    // initialRouteName: PopularScreen,
    backBehavior: 'none', // 按 back 键是否跳转到第一个 Tab， none 为不跳转
    tabBarOptions: {
        activeTintColor: '#008AC9', // 文字和图片选中颜色
        inactiveTintColor: '#999', // 文字和图片默认颜色
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#fff', // TabBar 背景色
            height: 60
        },
        iconStyle: {
            width: 22,
            height: 22
        },
        labelStyle: {
            fontSize: 12, // 文字大小
        },
    },
});

const root = StackNavigator({
    Home: {
        screen: MainScreenNavigator,
        navigationOptions: {
            header: null
        }
    },
    // 对应界面名称
    Detail: {
        screen: DetailScreen,
        navigationOptions: {
            header: null
        }
    },
    Fetch: {
        screen: FetchTest,
        navigationOptions: {
            header: null
        }
    },
}, {
    headerMode: 'screen',
});
export default SwitchNavigator({
    Welcome: SplashScreen,
    App: root
}, {
    initialRouteName: 'Welcome'
});
