import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import {getHeight, getWidth, width} from '../../utils/utlities';
import {colors} from '../../theme/colors';
import {StyleSheet} from 'react-native';
import {fonts} from '../../theme/fonts';

const ProfileCard = ({Icons}: any) => {
  return Icons?.map((item): any => {
    return (
      <View>
        <View style={styles.card}>
          <View
            style={{
              flexDirection: 'row',

              flex: 0.95,
              paddingHorizontal: 10,
              alignItems: 'center',
            }}>
            {item?.iconName}
            <View style={{paddingHorizontal: 10}}>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_BOLD,
                  fontSize: 14,
                  color: '#000',
                }}>
                {item?.title}
              </Text>
              <Text
                style={{
                  fontFamily: fonts.POPPINS_REGULAR,
                  fontSize: 12,
                  color: '#000',
                }}>
                {item?.desc}
              </Text>
            </View>
          </View>
          <Ionicons name="chevron-forward" size={16} />
        </View>
      </View>
    );
  });
};

export default ProfileCard;
const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    flexDirection: 'row',
    margin: 5,
    width: getWidth(width / 1.15),
    height: getHeight(50),
    //   backgroundColor: 'red',
    //   justifyContent: 'center',
    // paddingVertical: getHeight(10),
    alignItems: 'center',

    backgroundColor: colors.WHITE,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, // For Android
  },
});
