import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors} from '../theme/colors';
import {getFontSize, getHeight} from '../utils/utlities';
import {fonts} from '../theme/fonts';

interface Props {
  titleText: string;
  disabled?: boolean;
  onPress: () => void;
  icon?: React.JSX.Element;
  containerStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
}
const GenralButton: React.FC<Props> = ({
  titleText,
  disabled,
  onPress,
  icon,
  containerStyles,
  textStyles,
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={disabled || false}
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: disabled ? colors.GRAY_TEXT : colors.BLUE},
        containerStyles,
      ]}
      {...props}>
      {/* {icon && icon} */}
      <Text style={[styles.text, textStyles]}>
        {titleText || 'ProfileButton'}
      </Text>
    </TouchableOpacity>
  );
};

export default GenralButton;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: getHeight(44),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: getFontSize(16),
    color: colors.WHITE,
    fontFamily: fonts.POPPINS_MEDIUM,
  },
});
