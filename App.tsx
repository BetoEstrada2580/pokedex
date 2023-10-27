import { DarkTheme, DefaultTheme, NavigationContainer, useTheme } from '@react-navigation/native';
import { StackNavigator } from './src/navigator/StackNavigator';
import { useColorScheme } from 'react-native';

export default function App() {
    const currenTheme = useColorScheme();
    return (
        <NavigationContainer theme={currenTheme == 'dark' ? DarkTheme : DefaultTheme}>
            <StackNavigator />
        </NavigationContainer>
    );
}
