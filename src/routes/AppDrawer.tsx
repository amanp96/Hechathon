import {createDrawerNavigator} from '@react-navigation/drawer';

import Profile from '../screens/Profile';
import SettingScreen from '../screens/SettingScreen';
// import TabNavigation from './TabNavigation';
import Home from '../screens/Home';
import TabNavigation from './TabNavigation';

const Drawer = createDrawerNavigator();

const AppDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={TabNavigation} />

      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Settings" component={SettingScreen} />
    </Drawer.Navigator>
  );
};
export default AppDrawer;
