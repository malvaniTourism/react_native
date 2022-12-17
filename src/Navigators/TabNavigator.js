import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Profile" component={HomeScreen} />
            {/* <Tab.Screen name="Settings" component={Settings} /> */}
        </Tab.Navigator>
    )
}

export default TabNavigator
