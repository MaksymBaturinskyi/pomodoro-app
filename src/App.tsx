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
import {WelcomeScreen} from '@pages/WelcomeScreen/WelcomeScreen.tsx';

const Stack = createStackNavigator();
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
