import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';
import TabNavigator from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={TabNavigator} />
            <Drawer.Screen name="Profile" component={Profile} />
            <Drawer.Screen name="Settings" component={Settings} />
        </Drawer.Navigator>
    )
}

export default DrawerNavigator
