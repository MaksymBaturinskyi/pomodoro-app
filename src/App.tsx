/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WelcomeScreen} from '@pages/WelcomeScreen/WelcomeScreen.tsx';
import {Settings} from '@pages/Settings/Settings.tsx';
import TabBar from '@components/combinedComponents/TabBar.tsx';
import {Dashboard} from '@pages/Dashboard/Dashboard.tsx';
import {Home} from '@pages/Home/Home.tsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
	return (
		<Tab.Navigator tabBar={props => <TabBar {...props} />}>
			<Tab.Screen name="Home" component={Home} options={{headerShown: false}} />
			<Tab.Screen
				name="Settings"
				component={Settings}
				options={{headerShown: false}}
			/>
		</Tab.Navigator>
	);
};

const stackScreenOptions = {
	headerShown: false,
	gestureEnabled: false,
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
						barStyle={'light-content'}
						backgroundColor={backgroundStyle.backgroundColor}
					/>
					<Stack.Navigator initialRouteName="WelcomeScreen">
						<Stack.Screen
							name="WelcomeScreen"
							component={WelcomeScreen}
							options={stackScreenOptions}
						/>
						<Stack.Screen
							name="Dashboard"
							component={Dashboard}
							options={stackScreenOptions}
						/>
						<Stack.Screen
							name="TabNavigation"
							component={TabNavigation}
							options={stackScreenOptions}
						/>
					</Stack.Navigator>
				</SafeAreaView>
			</NavigationContainer>
		</>
	);
}

export default App;
