import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Favourites from '../screens/Favourites';
import CityDetails from '../screens/CityDetails';
import { NavigationProp } from '@react-navigation/native';
import CustomBottomTabBar from '../components/CustomBottomTabBar';

interface TabNavigationProps {
    navigation: NavigationProp<RootStackParamList>
}

export type RootStackParamList = {
    Home: undefined,
    TabNavigation: undefined,
    CityDetails: {
        title: string;
        thumbnailUrl: string;
        id: number;
    },
    Favourites: undefined;
    Login: undefined;
    Register: undefined;
}

const Tab = createBottomTabNavigator<RootStackParamList>();

const TabNavigation: React.FC<TabNavigationProps> = ({ }) => {
    return (
        <Tab.Navigator
            screenOptions={{ headerShown: false }}
            tabBar={(props) => <CustomBottomTabBar {...props} />}
        >
            <Tab.Screen

                name="Home"
                component={Home} />

            <Tab.Screen

                name="Favourites"
                component={Favourites} />


            <Tab.Screen
                name="CityDetails"
                component={CityDetails} />
        </Tab.Navigator>
    );
}

export default TabNavigation