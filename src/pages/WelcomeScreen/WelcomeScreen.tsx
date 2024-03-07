import React from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import {colors} from '@components/colors.ts';
import bg from '@images/bg.png';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type NavigationType = StackNavigationProp<RootStackParamList, 'Dashboard'>;
export const WelcomeScreen = () => {
	const navigation = useNavigation<NavigationType>();
	const handleNavigate = async () => {
		navigation.navigate('Dashboard');
	};

	return (
		<View style={{flex: 1, backgroundColor: colors.main}}>
			<ImageBackground source={bg} resizeMode="contain" style={styles.image}>
				<Text style={styles.title}>Plan your work and stay productive</Text>
				<TouchableOpacity style={styles.button} onPress={handleNavigate}>
					<Text
						style={{color: colors.textWhite, fontSize: 18, fontWeight: '600'}}>
						Get started
					</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		position: 'absolute',
		top: 30,
		color: colors.textWhite,
		fontSize: 24,
		fontWeight: '700',
		textAlign: 'center',
		paddingHorizontal: 20,
	},
	button: {
		position: 'absolute',
		bottom: 50,
		width: 300,
		color: colors.textWhite,
		alignItems: 'center',
		marginTop: 20,
		padding: 20,
		backgroundColor: 'purple',
		borderRadius: 20,
	},
});
