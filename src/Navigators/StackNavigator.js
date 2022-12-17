import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerNavigator from './DrawerNavigator';
import TabNavigator from './TabNavigator';

import SignIn from '../Screens/AuthScreens/SignIn'
import SignUp from '../Screens/AuthScreens/SignUp'

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLoggedIn ? (
                    // Screens for logged in users
                    <Stack.Group>
                        <Stack.Screen
                            name="Root"
                            component={DrawerNavigator}
                            options={{ headerShown: false }}
                        />
                        {/* <Stack.Screen name="Home" component={Home} /> */}
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
                <Stack.Group screenOptions={{ presentation: 'modal' }}>
                    <Stack.Screen
                        name="Home"
                        component={TabNavigator}
                        options={{ headerShown: false }}
                    />
                    {/* <Stack.Screen name="Help" component={Help} /> */}
                    {/* <Stack.Screen name="Invite" component={Invite} /> */}
                    {/* <Stack.Screen name="Feed" component={Feed} /> */}
                </Stack.Group>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator
