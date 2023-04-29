import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';

import SignIn from '../Screens/AuthScreens/SignIn'
import SignUp from '../Screens/AuthScreens/SignUp'

import SearchList from '../Screens/SearchList';
import RoutesList from '../Screens/RoutesList';
import BusTimings from '../Screens/BusTimings';
import ExploreList from '../Screens/ExploreList';
import CityDetails from '../Screens/CityDetails';
import PlaceList from '../Screens/PlaceList';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedIn ? (
                    // Screens for logged in users
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen
                            name="Root"
                            component={DrawerNavigator}
                            options={{ headerShown: false }}
                        />
                        {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
                        {/* <Stack.Screen name="Profile" component={Profile} /> */}
                    </Stack.Group>
                ) : (
                    // Auth screens
                    <Stack.Group screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="SignIn" component={SignIn} />
                        {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
                    </Stack.Group>
                )}
                {/* Common modal screens */}
                <Stack.Group screenOptions={{ headerShown: false, presentation: 'modal' }}>
                    <Stack.Screen
                        name="Home"
                        component={TabNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="SearchList" component={SearchList} />
                    <Stack.Screen name="RoutesList" component={RoutesList} />
                    <Stack.Screen name="BusTimings" component={BusTimings} />
                    <Stack.Screen name="Login" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                    <Stack.Screen name="ExploreList" component={ExploreList} />
                    <Stack.Screen name="CityDetails" component={CityDetails} />
                    <Stack.Screen name="PlaceList" component={PlaceList} />
                    {/* <Stack.Screen name="Invite" component={Invite} /> */}
                    {/* <Stack.Screen name="Feed" component={Feed} /> */}
                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
