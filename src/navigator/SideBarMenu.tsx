import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { MovementScreen } from '../screens/Moves/MovementScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { appStyles } from '../theme/appTheme';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from './Tabs';
import { DrawerActions } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

export const SideBarMenu = ({ navigation }: any) => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: { width: '50%' },
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Image source={require('../../assets/pokebola-blanca.png')} style={{ height: 30, width: 30 }} />
                    </TouchableOpacity>
                ),
            }}
            drawerContent={(props) => <CustomSideBar {...props} />}
        >
            <Drawer.Screen name="StackNavigator" options={{ title: 'Pokedex' }} component={Tabs} />
            <Drawer.Screen name="MovementScreen" options={{ title: 'Moves Dex' }} component={MovementScreen} />
        </Drawer.Navigator>
    );
};

export const CustomSideBar = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={appStyles.avatarContainer}>
                <Image source={require('../../assets/pokebola.png')} style={appStyles.avatar} />
            </View>
            {/* Opciones de menú */}
            <View style={appStyles.menuContainer}>
                <TouchableOpacity style={appStyles.menuBtn} onPress={() => navigation.navigate('StackNavigator')}>
                    <MaterialCommunityIcons name="pokeball" size={23} color="black" />
                    <Text style={appStyles.menuText}> Pokedex</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.menuBtn} onPress={() => navigation.navigate('MovementScreen')}>
                    <Ionicons name="book-outline" size={23} color={'black'} />
                    <Text style={appStyles.menuText}> Moves Dex</Text>
                </TouchableOpacity>
                <TouchableOpacity style={appStyles.menuBtn} onPress={() => navigation.navigate('SettingsScreen')}>
                    <Ionicons name="settings-outline" size={23} color={'black'} />
                    <Text style={appStyles.menuText}> Settings</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    );
};
