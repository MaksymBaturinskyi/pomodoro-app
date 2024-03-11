import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '@components/colors.ts';
import {Timer} from './Timer/Timer.tsx';

export const Home = ({route}: any) => {
	return (
		<View style={styles.container}>
			<Timer route={route} />
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
