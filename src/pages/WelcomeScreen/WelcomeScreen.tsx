import React from 'react';
import {Text, View} from 'react-native';

export const WelcomeScreen = () => {
	// const navigation = useNavigation();
	// const handleNavigate = async () => {
	// 	navigation.navigate('Tutorial');
	// };

	return (
		<View
			style={{
				width: '100%',
				flex: 1,
				paddingTop: 90,
				alignItems: 'center',
				position: 'relative',
			}}>
			<Text style={{color: '#000'}}>Welcome</Text>
		</View>
	);
};
