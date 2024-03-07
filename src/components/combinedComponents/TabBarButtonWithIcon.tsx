import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

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
	const button = {
		...styles.button,
		backgroundColor: isActive ? 'rgb(255,255,255, 0.6)' : 'transparent',
	};

	return (
		<TouchableOpacity onPress={onPress} style={button}>
			<Icon />
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		width: 34,
		height: 34,
		padding: 4,
		borderRadius: 8,
	},
});

export default TabBarButtonWithIcon;
