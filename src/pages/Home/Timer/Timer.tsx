import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Pause from '@icons/pause.svg';
import Play from '@icons/play.svg';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {colors} from '@components/colors.ts';
import {EnumStatus} from '@pages/Home/Timer/timer.interface.ts';

const flowDuration = 1 * 60;
const sessionCount = 7;
const breakDuration = 1 * 60;

export const Timer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSession, setCurrentSession] = useState(7);
	const [status, setStatus] = useState<EnumStatus>(EnumStatus.REST);
	return (
		<View style={styles.container}>
			<CountdownCircleTimer
				isPlaying={isPlaying}
				duration={flowDuration}
				colors={['#3A3570', '#ffffff']}
				colorsTime={[7, 0]}
				size={300}
				strokeWidth={10}
				trailColor={'#2f2f4c'}
				onUpdate={elapsedTime => {
					const totalTime = 10 * 60;
					const progress = (elapsedTime / totalTime) * 100;
				}}
				onComplete={() => {
					setIsPlaying(false);
					return {shouldRepeat: false, delay: 1};
				}}>
				{({remainingTime}) => {
					const minutes = Math.floor(remainingTime / 60);
					const seconds = remainingTime % 60;

					const padTime = (time: string | number) =>
						time.toString().padStart(2, '0');

					return (
						<>
							<Text style={styles.timerText}>
								{`${padTime(minutes)}:${padTime(seconds)}`}
							</Text>
							<Text style={styles.statusText}>
								{status === EnumStatus.REST ? 'REST' : 'WORK'}
							</Text>
						</>
					);
				}}
			</CountdownCircleTimer>

			<View
				style={{
					marginTop: 34,
					flexDirection: 'row',
				}}>
				{Array.from({length: sessionCount}, (_, index) => (
					<View key={`session-${index}`} style={styles.sessionItem}>
						<View
							style={[
								styles.sessionCircle,
								index < currentSession && styles.sessionCircleFilled,
								index + 1 === currentSession && styles.sessionCircleActive,
							]}></View>
						{index + 1 !== sessionCount && (
							<View
								style={[
									styles.sessionConnector,
									index < currentSession - 1 && styles.sessionConnectorFilled,
								]}></View>
						)}
					</View>
				))}
			</View>

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
		justifyContent: 'space-between',
		flex: 1,
		marginTop: 100,
		marginBottom: 40,
	},
	timerText: {
		color: colors.textWhite,
		fontSize: 64,
		fontWeight: '400',
	},
	sessionItem: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	sessionCircle: {
		width: 20,
		height: 20,
		borderRadius: 10,
		borderColor: colors.primary,
		backgroundColor: colors.buttonInactive,
	},
	sessionCircleFilled: {
		backgroundColor: colors.primary,
	},
	sessionCircleActive: {
		width: 30,
		height: 30,
		borderRadius: 15,
		borderWidth: 5,
		backgroundColor: 'transparent',
	},
	sessionConnector: {
		width: 20,
		height: 2,
		backgroundColor: colors.buttonInactive,
	},
	sessionConnectorFilled: {
		backgroundColor: colors.primary,
	},
	statusText: {
		color: colors.textWhite,
		fontSize: 24,
		marginTop: 20,
	},
	button: {
		shadowColor: colors.primary,
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
		backgroundColor: colors.primary,
		borderRadius: 50,
		zIndex: 1,
	},
});
