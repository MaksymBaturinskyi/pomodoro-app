import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {colors} from '@components/colors.ts';

interface IDropDown {
	placeholder: string;
	value: any;
	onChange: (itemValue: any, index: number) => void;
}

export const Dropdown: FC<PropsWithChildren<IDropDown>> = ({
	placeholder,
	value,
	onChange,
	children,
}) => {
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
		height: 130,
		overflow: 'hidden',
		justifyContent: 'center',
	},
});
