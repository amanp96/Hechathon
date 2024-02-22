import {View, Text, Platform} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppNavigatior;
