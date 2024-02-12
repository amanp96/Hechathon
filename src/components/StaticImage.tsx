import {View, Text, SafeAreaView, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import Header from '../components/Header';
import {getHeight, getWidth, width} from '../utils/utlities';

const StaticImage = () => {
  return (
    <View
      style={{
        paddingHorizontal: 30,

        alignItems: 'center',
        // backgroundColor: 'red',
        // height: getHeight(300),
        flex: 1,
      }}>
      <Image
        source={require('../assets/images/dummyImage.jpeg')}
        style={{width: width, height: getHeight(200)}}
        resizeMode="cover"
      />
    </View>
  );
};

export default StaticImage;
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
  image: {
    flex: 1,
    width: getWidth(300), // Adjust the width as needed
  },
});
