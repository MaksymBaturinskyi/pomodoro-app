import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors} from '@components/colors.ts';

interface IDropDown {
	placeholder: string;
	value: string | number;
	onChange: (itemValue: string | number, index: number) => void;
}

export const Dropdown = ({
	placeholder,
	value,
	children,
	onChange,
}: IDropDown) => {
	return (
		<View>
			<Text style={styles.textPickerTitle}>{placeholder}</Text>
			<Picker
				style={styles.picker}
				itemStyle={styles.textPickerTitle}
				selectedValue={value}
				onValueChange={onChange}>
				{children}
			</Picker>
		</View>
	);
};

const styles = StyleSheet.create({
	textPickerTitle: {
		color: colors.textWhite,
	},
	picker: {
		height: 120,
		overflow: 'hidden',
		justifyContent: 'center',
	},
});
