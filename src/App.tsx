/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
	SafeAreaView,
	StatusBar,
	StyleSheet,
	useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WelcomeScreen} from '@pages/WelcomeScreen/WelcomeScreen.tsx';
import {Settings} from '@pages/Settings/Settings.tsx';
import TabBar from '@components/combinedComponents/TabBar.tsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
	return (
		<Tab.Navigator tabBar={props => <TabBar {...props} />}>
			<Tab.Screen
				name="Home"
				component={WelcomeScreen}
				options={{headerShown: false}}
			/>
			<Tab.Screen
				name="Setting"
				component={Settings}
				options={{headerShown: false}}
			/>
		</Tab.Navigator>
	);
};
function App(): React.JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: '#1e1c2e',
		flex: 1,
	};

	return (
		<>
			<NavigationContainer>
				<SafeAreaView style={backgroundStyle}>
					<StatusBar
						barStyle={isDarkMode ? 'light-content' : 'dark-content'}
						backgroundColor={backgroundStyle.backgroundColor}
					/>
					<Stack.Navigator initialRouteName="WelcomeScreen">
						<Stack.Screen
							name="WelcomeScreen"
							component={WelcomeScreen}
							options={{headerShown: false}}
						/>
					</Stack.Navigator>
					<Stack.Screen
						name="TabNavigation"
						component={TabNavigation}
						options={{headerShown: false}}
					/>
				</SafeAreaView>
			</NavigationContainer>
		</>
	);
}

const styles = StyleSheet.create({
	sectionContainer: {
		flex: 1,
		marginTop: 32,
		paddingHorizontal: 24,
		backgroundColor: '#1e1c2e',
	},
});

export default App;
