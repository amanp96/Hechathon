import {View, Text, Platform} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Luxe';
import BottomTabNavigator from './BottomTabNavigator';
import ProductList from '../screens/ProductList';
import Purchase from '../screens/Purchase';
import HotTrends from '../screens/HotTrends';

const Stack = createNativeStackNavigator();

const AppNavigatior = () => {
  return (
    <NavigationContainer>
      <View style={{flex: 1}}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="BottomTab" component={BottomTabNavigator} />
          <Stack.Screen name="ProductList" component={ProductList} />
          <Stack.Screen name="HotTrends" component={HotTrends} />
          <Stack.Screen name="Purchase" component={Purchase} />
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default AppNavigatior;
