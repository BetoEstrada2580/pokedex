
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './TabsList';
import { Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabsSearch } from './TabsSeach';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={{
                backgroundColor:'white'
            }}
            screenOptions={{
                tabBarActiveTintColor: '#5856D6',
                tabBarLabelStyle:{
                    marginBottom: (Platform.OS === 'ios') ? 0 : 10
                },
                tabBarStyle:{
                    position:'absolute',
                    backgroundColor: 'rgba(255,255,255,0.92)',
                    borderWidth: 0,
                    elevation: 0,
                    height: (Platform.OS === 'ios') ? 80 : 50
                }
            }}
        >
            <Tab.Screen 
                name="Home" 
                component={Navigator}
                options={{
                    headerShown: false,
                    tabBarLabel: "List",
                    tabBarIcon: ({color}) => <Ionicons name='list-outline' color={color} size={25} />
                }}
                
            />
            <Tab.Screen
                name="Search"
                component={TabsSearch}
                options={{
                    headerShown: false,
                    tabBarLabel: "Search",
                    tabBarIcon: ({color}) => <Ionicons name='search-outline' color={color} size={25} />
                }}
            />
        </Tab.Navigator>
    );
}