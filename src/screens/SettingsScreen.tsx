import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { appStyles } from '../theme/appTheme';

export const SettingsScreen = () => {
    return (
        <SafeAreaView style={appStyles.globalMargin}>
            <Text>Settings</Text>
        </SafeAreaView>
    );
};
