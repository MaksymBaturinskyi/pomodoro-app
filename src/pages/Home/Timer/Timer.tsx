import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Pause from '@icons/pause.svg';
import Play from '@icons/play.svg';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

export const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<View style={styles.container}>
			<CountdownCircleTimer
				isPlaying
				duration={7}
				colors={['#004777', '#F7B801', '#A30000', '#A30000']}
				colorsTime={[7, 5, 2, 0]}>
				{({remainingTime}) => <Text>{remainingTime}</Text>}
			</CountdownCircleTimer>
			<TouchableOpacity
				style={styles.button}
				onPress={() => setIsPlaying(!isPlaying)}>
				{isPlaying ? <Pause /> : <Play />}
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
	},
	button: {
		marginTop: 40,
		shadowColor: 'purple',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowRadius: 10,
		shadowOpacity: 0.9,
		elevation: 20,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 70,
		height: 70,
		padding: 20,
		backgroundColor: 'purple',
		borderRadius: 50,
		zIndex: 1,
	},
});
