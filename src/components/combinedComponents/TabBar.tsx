import React from 'react';
import Deal from '../../../../assets/icons/deal.svg';
import Profile from '../../../../assets/icons/profile.svg';
import Home from '@icons/home.svg';
import TabBarButtonWithIcon from '@components/combinedComponents/TabBarButtonWithIcon';
import {colors} from '@components/colors';

const TabBar = ({state, descriptors, navigation}) => {
	return (
		<Block
			flexDirection={'row'}
			paddingHorizontal={'50px'}
			paddingTop={'12px'}
			paddingBottom={'8px'}
			justifyContent={'space-between'}
			borderTopWidth={'1px'}
			borderTopColor={colors.greyBorder}>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];
				const label = options.tabBarLabel || route.name;
				const isActive = state.index === index;

				const Icon = () => {
					const color = isActive ? colors.textBlack : colors.textGrey;
					if (label === 'Home') return <Home fill={color} />;
					if (label === 'Deal') return <Deal fill={color} />;
					if (label === 'Profile') return <Profile fill={color} />;
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
		</Block>
	);
};

export default TabBar;
