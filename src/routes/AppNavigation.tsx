import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AppDrawer from './AppDrawer';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Drawer" component={AppDrawer} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
