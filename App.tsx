import { NavigationContainer } from '@react-navigation/native';
import { SideBarMenu } from './src/navigator/SideBarMenu';

export default function App() {
  return (
    <NavigationContainer>
      <SideBarMenu />
    </NavigationContainer>
  );
};
