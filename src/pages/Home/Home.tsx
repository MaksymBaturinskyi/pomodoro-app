import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors} from '@components/colors.ts';
import {Timer} from './Timer/Timer.tsx';

export const Home = () => {
	return (
		<View style={styles.container}>
			<Text style={{color: colors.textWhite}}>Home screen</Text>
			<Timer />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.main,
	},
});
