import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Tabs } from './Tabs';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Tabs}
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
        </Stack.Navigator>
    );
};
