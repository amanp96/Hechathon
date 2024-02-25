import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Task from '../screens/Task';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const Tab = createBottomTabNavigator();
const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'center',

                alignItems: 'center',
                // alignSelf: 'center',
              }}>
              <AntDesign
                name="home"
                color={focused ? '#4287f5' : '#000'}
                size={22}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Tasks"
        component={Task}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'center',

                alignItems: 'center',
                // alignSelf: 'center',
              }}>
              <FontAwesome
                name="tasks"
                color={focused ? '#4287f5' : '#000'}
                size={22}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View
              style={{
                justifyContent: 'center',

                alignItems: 'center',
                // alignSelf: 'center',
              }}>
              <EvilIcons
                name="user"
                color={focused ? '#4287f5' : '#000'}
                size={24}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
