import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors} from '@components/colors.ts';
import Pause from '@icons/pause.svg';
import Play from '@icons/play.svg';
import LinearGradient from 'react-native-linear-gradient';

export const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	return (
		<View>
			<LinearGradient
				colors={['purple', 'transparent']}
				start={{x: -1.5, y: 0.5}}
				end={{x: 1, y: 1}}
				style={styles.shadow}
			/>
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
		opacity: 0.6,
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
