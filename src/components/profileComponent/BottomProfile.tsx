import {View, Text, Image} from 'react-native';
import React from 'react';
import {colors} from '../../theme/colors';
import GenralButton from '../GenralButton';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {getFontSize, getHeight, getWidth, width} from '../../utils/utlities';
import {StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fonts} from '../../theme/fonts';

const BottomProfile = () => {
  const data = [
    {title: 'FAQS'},
    {title: 'ABOUT US'},
    {title: 'TERMS OF USE'},
    {title: 'PRIVACY POLICY'},
  ];
  return (
    <View style={styles.card}>
      {data.map((item): any => {
        return (
          <View style={{paddingLeft: 20}}>
            <Text
              style={{
                fontFamily: fonts.POPPINS_REGULAR,
                fontSize: getFontSize(14),
                color: '#000',
              }}>
              {item?.title}
            </Text>
          </View>
        );
      })}
    </View>
  );
};

export default BottomProfile;
const styles = StyleSheet.create({
  card: {
    // borderWidth: 0.5,
    margin: 5,
    width: getWidth(width / 1.15),
    height: getHeight(110),
    justifyContent: 'space-evenly',
    //   backgroundColor: 'red',
    //   justifyContent: 'center',
    // paddingVertical: getHeight(10),

    backgroundColor: colors.WHITE,
    // borderRadius: 8,

    elevation: 5, // For Android
  },
});
