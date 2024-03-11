import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '@components/colors.ts';
import {Picker} from '@react-native-picker/picker';
import {Dropdown} from '@pages/Settings/DropDown/Dropdown.tsx';

export const Settings = ({onSaveSettings}: any) => {
	const [workTime, setWorkTime] = useState('20');
	const [restTime, setRestTime] = useState('5');
	const [intervals, setIntervals] = useState('4');

	const saveSettings = () => {
		onSaveSettings(
			parseInt(workTime, 10),
			parseInt(restTime, 10),
			parseInt(intervals, 10),
		);
	};
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.main,
				paddingHorizontal: 20,
				paddingTop: 50,
			}}>
			<Dropdown
				placeholder={'Work duration: (min.)'}
				value={workTime}
				onChange={(itemValue, itemIndex) => setWorkTime(itemValue)}>
				{[15, 20, 25, 30, 45, 52, 90].map(val => (
					<Picker.Item
						label={val.toString()}
						key={`workDuration ${val}`}
						value={val}
					/>
				))}
			</Dropdown>

			<Dropdown
				placeholder={'Rest duration: (min.)'}
				value={restTime}
				onChange={(itemValue, itemIndex) => setRestTime(itemValue)}>
				{[5, 10, 17, 20, 25, 30].map(val => (
					<Picker.Item
						label={(val + 1).toString()}
						key={`breakDuration ${val}`}
						value={val}
					/>
				))}
			</Dropdown>

			<Dropdown
				placeholder={'Intervals:'}
				value={intervals}
				onChange={(itemValue, itemIndex) => setIntervals(itemValue)}>
				{[1, 3, 5, 7].map(val => (
					<Picker.Item
						label={val.toString()}
						key={`sessionCount ${val}`}
						value={val}
					/>
				))}
			</Dropdown>

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.saveButton} onPress={saveSettings}>
					<Text style={styles.textButton}>Save</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttonContainer: {
		width: '100%',
		paddingHorizontal: 20,
		paddingTop: 100,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	saveButton: {
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.secondary,
		width: 150,
		padding: 15,
		borderRadius: 30,
	},
	textButton: {
		color: colors.textWhite,
		fontSize: 18,
		fontWeight: '600',
		letterSpacing: 0.5,
	},
});
