import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SideBarMenu } from './SideBarMenu';
import { SettingsScreen } from '../screens/SettingsScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SideBarMenu"
                component={SideBarMenu}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="PokemonScreen"
                component={PokemonScreen}
                options={{
                    headerShown: false,
                    presentation: 'modal',
                }}
            />
            <Stack.Screen
                name="SettingsScreen"
                component={SettingsScreen}
                options={{
                    title: 'Settings',
                    presentation: 'modal',
                }}
            />
        </Stack.Navigator>
    );
};
