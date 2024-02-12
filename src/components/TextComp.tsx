import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import React, {Children} from 'react';
import {getFontSize} from '../utils/utlities';
import {fonts} from '../theme/fonts';

interface Props {
  // text: string;
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}
const TextComp: React.FC<Props> = ({textStyles, children}) => {
  return <Text style={[styles.text, textStyles]}>{children || ' '}</Text>;
};

export default TextComp;

const styles = StyleSheet.create({
  text: {
    fontSize: getFontSize(14),
    fontFamily: fonts.POPPINS_REGULAR,
    color: '#000',
  },
});
