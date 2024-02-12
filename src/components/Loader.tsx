import {View, Text, ActivityIndicator, SafeAreaView} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {height, width} from '../utils/utlities';

const Loader = () => {
  return (
    <View
      style={{
        height: height,
        width: width,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        backgroundColor: colors.WHITE,
      }}>
      <ActivityIndicator size="large" color={colors.BLUE} />
    </View>
  );
};

export default Loader;
