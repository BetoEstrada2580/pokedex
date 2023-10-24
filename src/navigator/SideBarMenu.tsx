import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { useWindowDimensions } from 'react-native';
import { StackNavigator } from './StackNavigator';
import { MovementScreen } from '../screens/MovementScreen';

const Drawer = createDrawerNavigator();

export const SideBarMenu = () => {
    const { width } = useWindowDimensions();

    return (
        <Drawer.Navigator
            screenOptions={{
                drawerType: width >= 768 ? 'permanent' : 'front',
            }}
        >
            <Drawer.Screen
                name="StackNavigator"
                options={{ title: 'Pokedex' }}
                component={StackNavigator}
            />
            <Drawer.Screen
                name="MovementScreen"
                options={{ title: 'Moves Dex' }}
                component={MovementScreen}
            />
        </Drawer.Navigator>
    );
};
