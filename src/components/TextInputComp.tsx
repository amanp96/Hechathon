import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {StyleProp} from 'react-native';
import {colors} from '@/theme/colors';
import {
  getFontSize,
  getHeight,
  getHorizontalPaddingAndMargin,
  getVerticalPaddingAndMargin,
  getWidth,
  width,
} from '@/utils/utilities';
import {EyeIcon, EyeSlashIcon} from '@/theme/icons';
import {fonts} from '@/theme/fonts';
interface Props extends TextInputProps {
  textInputStyles?: StyleProp<TextStyle>;
  containerStyles?: StyleProp<ViewStyle>;
  isPassword?: boolean;
  placeholder?: string;
  titleText: string | number;
}
const TextInputComp: React.FC<Props> = ({
  textInputStyles,
  containerStyles,
  isPassword,
  placeholder,
  titleText,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(isPassword ? true : false);

  return (
    <View style={[styles.textInputView, containerStyles]}>
      <TextInput
        placeholder={placeholder || ' '}
        placeholderTextColor={colors.GRAY_TEXT}
        style={[styles.textInput, textInputStyles]}
        secureTextEntry={showPassword}
        {...props}
      />

      {isPassword && (
        <Pressable
          onPress={() => setShowPassword(!showPassword)}
          style={{
            width: '12%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {!showPassword ? (
            <EyeIcon size={16} color={colors.BLUE} />
          ) : (
            <EyeSlashIcon size={16} color={colors.BLUE} />
          )}
        </Pressable>
      )}
      <View style={[styles.titleView]}>
        <Text style={styles.titleText}>{titleText || 'Full Name*'}</Text>
      </View>
    </View>
  );
};

export default TextInputComp;

const styles = StyleSheet.create({
  textInputView: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.GRAY_BORDER,
    height: getHeight(46),
    flexDirection: 'row',
    marginVertical: width / 32,
  },
  textInput: {
    paddingStart: 10,
    width: '88%',
    color: colors.BLUE,
    height: getHeight(46),
    fontSize: getFontSize(16),
    fontFamily: fonts.POPPINS_REGULAR,
    textAlignVertical: 'center',
    alignItems: 'center',
  },
  titleView: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 1,
    position: 'absolute',
    top: getHeight(-19),
    left: getWidth(10),
    zIndex: -1000,
    overflow: 'visible',
  },
  titleText: {
    fontSize: getFontSize(16),
    color: colors.GRAY_TEXT_SECONDARY,
    bottom: getHeight(-6),
    fontFamily: fonts.POPPINS_MEDIUM,
  },
});
