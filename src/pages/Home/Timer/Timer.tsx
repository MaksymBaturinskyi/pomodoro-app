import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '@components/colors.ts';
import Pause from '@icons/pause.svg';
import Play from '@icons/play.svg';

export const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<View>
			<View style={styles.shadow}></View>
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
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.main,
	},
	shadow: {
		position: 'absolute',
		width: 80,
		height: 80,
		borderRadius: 50,
		opacity: 0.1,
		backgroundColor: 'purple',
		transform: [{translateX: -5}, {translateY: -5}],
	},
	button: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: 70,
		height: 70,
		padding: 15,
		backgroundColor: 'purple',
		borderRadius: 50,
		zIndex: 1,
	},
});
