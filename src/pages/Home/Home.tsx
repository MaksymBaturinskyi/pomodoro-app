import React from 'react';
import {Text, View} from 'react-native';
import {colors} from '@components/colors.ts';

export const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: colors.main,
			}}>
			<Text style={{color: colors.textWhite}}>Home screen</Text>
		</View>
	);
};
