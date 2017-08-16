import React from 'react';
import {
	AppRegistry,
	StyleSheet,
	Text,
	View
} from 'react-native';
import {
	StackNavigator
} from 'react-navigation';
import AppContainer from './app/containers/app.js'
import HomeContainer from './app/containers/homeContainer.js'
import ProvinceContainer from './app/containers/provinceContainer.js'
import ProvinceResultContainer from './app/containers/provinceResultContainer.js'
class ytow extends React.Component {
	render() {
		return (
			<Navigator />
		)
	}
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
});
const ytowin = StackNavigator({
	App: {
		screen: AppContainer
	},
	Home: {
		screen: HomeContainer
	},
	Province: {
		screen: ProvinceContainer
	},
	ProvinceResult: {
		screen: ProvinceResultContainer
	}
}, {
	initialRouteName: 'Home', // 默认显示界面
	navigationOptions: {
		title: 'ytowin',
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#139aff',
		},
		headerTitleStyle: {
			alignSelf: 'center',
			fontSize: 20,
		}
	},
	mode: 'card', // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
	headerMode: 'float', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
	onTransitionStart: () => {
		console.log('导航栏切换开始');
	}, // 回调
	onTransitionEnd: () => {
			console.log('导航栏切换结束');
		} // 回调
});
AppRegistry.registerComponent('ytowin', () => ytowin);