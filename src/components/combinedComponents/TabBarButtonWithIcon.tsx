import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '@components/colors.ts';

interface TabBarButtonWithIconProps {
	icon: React.FC;
	label: string;
	isActive: boolean;
	onPress: () => void;
}

const TabBarButtonWithIcon = ({
	icon: Icon,
	label,
	isActive,
	onPress,
}: TabBarButtonWithIconProps) => {
	const titleTextStyle = {
		...styles.titleText,
		color: isActive ? colors.textBlack : colors.textGrey,
	};

	return (
		<TouchableOpacity onPress={onPress}>
			<Icon />
			<Text style={titleTextStyle}>{label}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	titleText: {
		marginTop: 8,
		fontSize: 20,
		fontWeight: 'bold',
	},
});

export default TabBarButtonWithIcon;
