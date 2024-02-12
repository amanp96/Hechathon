import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import React from 'react';
import {fonts} from '../theme/fonts';
import {colors} from '../theme/colors';
import {getFontSize, getWidth, height, width} from '../utils/utlities';

interface Props {
  headerTitle?: string;
  Icon?: any;
  onIconPress?: (index: number) => void;
  backIcon?: boolean;
  crossIcon?: boolean;
  onRightIconPress?: () => void;
  rightIconComp?: JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
}
const Header: React.FC<Props> = ({
  headerTitle,
  Icon,
  onIconPress,
  backIcon,
  crossIcon,
  onRightIconPress,
  rightIconComp,
  containerStyle,
  titleStyle,
}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View
        style={{
          flexDirection: 'row',

          flex: 1,
          paddingHorizontal: getWidth(10),
          paddingLeft: getWidth(20),
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={[
              {
                color: colors.BLACK,
                fontFamily: fonts.POPPINS_BOLD,
                fontSize: getFontSize(20),
              },
              titleStyle,
            ]}>
            {headerTitle || 'Myntra'}
          </Text>
          {!headerTitle && (
            <Entypo name="chevron-small-down" size={30} color={'#f5426c'} />
          )}
        </View>
        <View
          style={{
            flexDirection: 'row',

            width: width / 2.8,
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          {Icon?.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  onIconPress!(index);
                }}>
                {item?.comp}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: height / 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

    borderBottomWidth: 1,
    borderColor: colors.GRAY_BORDER,
  },
  backIconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    left: 10,
    height: '100%',
    width: 40,
  },
  crossIconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    right: 10,
    height: '100%',
    width: 40,
  },
  SaveIconView: {},
  editIconView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    right: 10,
    height: '100%',
    width: 40,
  },
});
