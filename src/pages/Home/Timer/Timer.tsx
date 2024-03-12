import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Pause from '@icons/pause.svg';
import Play from '@icons/play.svg';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';
import {colors} from '@components/colors.ts';
import {EnumStatus} from '@pages/Home/Timer/timer.interface.ts';

export const Timer = ({settings}: any) => {
	const flowDuration = settings.workTime;
	const sessionCount = settings.intervals;
	const breakDuration = settings.restTime;
	const [isPlaying, setIsPlaying] = useState(false);
	const [currentSession, setCurrentSession] = useState(1);
	const [key, setKey] = useState(0);

	const getStatus = (session: number) => {
		if (session > sessionCount) return EnumStatus.END;
		return session % 2 === 0 ? EnumStatus.REST : EnumStatus.WORK;
	};

	const startNextSession = () => {
		if (currentSession <= sessionCount) {
			setCurrentSession(prev => prev + 1);
			setIsPlaying(true);
			setKey(prev => prev + 1);
		} else {
			setIsPlaying(false);
		}
	};

	const onPressPlayPause = () => {
		if (getStatus(currentSession) === EnumStatus.END) {
			setCurrentSession(1);
			setKey(prev => prev + 1);
			setIsPlaying(true);
		} else {
			setIsPlaying(prev => !prev);
		}
	};

	const isWorkSession = getStatus(currentSession) === EnumStatus.WORK;
	const duration = isWorkSession ? flowDuration : breakDuration;
	return (
		<View style={styles.container}>
			<CountdownCircleTimer
				key={key}
				isPlaying={isPlaying}
				duration={duration}
				colors={['#6c4eb3', '#ffffff']}
				colorsTime={[flowDuration, 0]}
				size={300}
				strokeWidth={10}
				trailColor={'#6c4eb3'}
				onComplete={() => {
					startNextSession();
					return {shouldRepeat: false};
				}}>
				{({remainingTime}) => {
					const minutes = Math.floor(remainingTime / 60);
					const seconds = remainingTime % 60;

					const padTime = (time: string | number) =>
						time.toString().padStart(2, '0');
					const statusText = getStatus(currentSession);

					return (
						<>
							<Text style={styles.timerText}>
								{`${padTime(minutes)}:${padTime(seconds)}`}
							</Text>
							<Text style={styles.statusText}>{statusText}</Text>
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

			<TouchableOpacity style={styles.button} onPress={onPressPlayPause}>
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
		backgroundColor: colors.secondary,
		borderRadius: 50,
		zIndex: 1,
	},
});
