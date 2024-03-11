import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {colors} from '@components/colors.ts';
import {Picker} from '@react-native-picker/picker';

export const Settings = ({navigation}: any) => {
	const [workTime, setWorkTime] = useState('20');
	const [restTime, setRestTime] = useState('5');
	const [intervals, setIntervals] = useState('4');

	const saveSettings = () => {
		navigation.navigate('Home', {
			workTime: parseInt(workTime, 10),
			restTime: parseInt(restTime, 10),
			intervals: parseInt(intervals, 10),
		});
	};
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.main,
				paddingHorizontal: 20,
			}}>
			<Text style={styles.textPickerTitle}>Work Time (minutes):</Text>
			<Picker
				style={styles.picker}
				itemStyle={styles.textPickerTitle}
				selectedValue={workTime}
				onValueChange={(itemValue, itemIndex) => setWorkTime(itemValue)}>
				{Array.from(Array(7).keys()).map(val => {
					return (
						<Picker.Item
							label={val.toString()}
							key={`sessionCount ${val}`}
							value={val}
						/>
					);
				})}
			</Picker>

			<Text style={styles.textPickerTitle}>Rest Time (minutes):</Text>
			<Picker
				itemStyle={styles.textPickerTitle}
				selectedValue={restTime}
				onValueChange={(itemValue, itemIndex) => setRestTime(itemValue)}>
				<Picker.Item label="1" value="1" />
				<Picker.Item label="2" value="2" />
				<Picker.Item label="3" value="3" />
			</Picker>

			<Text style={styles.textPickerTitle}>Intervals:</Text>
			<Picker
				itemStyle={styles.textPickerTitle}
				selectedValue={intervals}
				onValueChange={(itemValue, itemIndex) => setIntervals(itemValue)}>
				<Picker.Item label="1" value="1" />
				<Picker.Item label="2" value="2" />
				<Picker.Item label="3" value="3" />
			</Picker>

			{Array.from(Array(7).keys()).map(val => {
				return (
					<Picker.Item
						label={val.toString()}
						key={`sessionCount ${val}`}
						value={val}
					/>
				);
			})}

			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.cancelButton} onPress={saveSettings}>
					<Text style={styles.textButton}>Cancel</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.saveButton}>
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
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
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
	cancelButton: {
		justifyContent: 'center',
		alignItems: 'center',
		width: 150,
		padding: 15,
	},
	textButton: {
		color: colors.textWhite,
		fontSize: 18,
		fontWeight: '600',
		letterSpacing: 0.5,
	},
	textPickerTitle: {
		color: colors.textWhite,
	},
	picker: {
		height: 120,
		overflow: 'hidden',
		justifyContent: 'center',
	},
});
