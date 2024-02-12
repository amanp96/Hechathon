import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {colors} from '../theme/colors';
import Luxe from '../screens/Luxe';
import Beauty from '../screens/HotTrends';
import LuxeIndia from '../screens/LuxeIndia';
import Brands from '../screens/Brands';
import Profile from '../screens/Profile';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import HotTrends from '../screens/HotTrends';

const Tab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.BLUE,
        tabBarInactiveTintColor: colors.ICON_COLOR,
      }}>
      <Tab.Screen
        name="Luxe"
        component={Luxe}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Entypo
              name="home"
              size={24}
              color={focused ? colors.BLUE : colors.ICON_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Hot Trends"
        component={HotTrends}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Ionicon
              name="chatbubble-ellipses"
              size={24}
              color={focused ? colors.BLUE : colors.ICON_COLOR}
            />
          ),
          unmountOnBlur: true,
        }}
      />
      <Tab.Screen
        name="Luxe India"
        component={LuxeIndia}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) =>
            focused ? (
              <Ionicon
                name="diamond-outline"
                size={24}
                color={colors.ICON_COLOR}
              />
            ) : (
              <Ionicon name="diamond" size={24} color={colors.BLACK} />
            ),
        }}
      />
      <Tab.Screen
        name="Brands"
        component={Brands}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome
              name="user-circle"
              size={24}
              color={focused ? colors.BLUE : colors.ICON_COLOR}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Arup"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <FontAwesome
              name="user-circle"
              size={24}
              color={focused ? colors.BLUE : colors.ICON_COLOR}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
