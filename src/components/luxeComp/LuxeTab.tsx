import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {getHeight, getWidth} from '../../utils/utlities';

const LuxeTab = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}>
      <View style={{backgroundColor: 'red'}}>
        <Text>WOMEN</Text>
      </View>
      <View>
        <Text>MEN</Text>
      </View>
    </View>
  );
};

export default LuxeTab;
