import React from 'react';
import Home from '@icons/home.svg';
import Settings from '@icons/settings.svg';
import TabBarButtonWithIcon from '@components/combinedComponents/TabBarButtonWithIcon';
import {colors} from '@components/colors';
import {View} from 'react-native';

const TabBar = ({state, descriptors, navigation}: any) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				paddingHorizontal: 50,
				paddingTop: 12,
				paddingBottom: 8,
				height: 50,
				backgroundColor: colors.main,
				justifyContent: 'space-between',
				alignItems: 'center',
				borderTopWidth: 1,
				borderTopColor: colors.greyBorder,
			}}>
			{state.routes.map((route: any, index: any) => {
				const {options} = descriptors[route.key];
				const label = options.tabBarLabel || route.name;
				const isActive = state.index === index;

				const Icon = () => {
					if (label === 'Home') return <Home />;
					if (label === 'Settings') return <Settings />;
					return null;
				};

				const onPress = () => {
					navigation.navigate(route.name);
				};

				return (
					<TabBarButtonWithIcon
						key={index}
						icon={Icon}
						label={label}
						isActive={isActive}
						onPress={onPress}
					/>
				);
			})}
		</View>
	);
};

export default TabBar;
