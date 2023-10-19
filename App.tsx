import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/navigator/Tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PokemonScreen } from './src/screens/PokemonScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Tabs} 
          options={{
            headerShown:false
          }}
          />
          <Stack.Screen 
          name="PokemonScreen" 
          component={PokemonScreen} 
          options={{
            headerShown:false
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
