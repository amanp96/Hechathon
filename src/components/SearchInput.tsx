import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {getHeight, getWidth} from '../utils/utlities';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../theme/colors';

const SearchInput = ({onChange}: any) => {
  return (
    <View
      style={{
        height: getHeight(46),
        borderColor: '#D9D9D9',
        borderRadius: 6,
        borderWidth: 1,
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          // @ts-ignore
          // navigation.navigate('FindAgent');
        }}
        style={styles.findAgentSearchView}>
        <View style={{position: 'absolute', left: getWidth(12)}}>
          <Ionicons name="search" size={20} color={'#000'} />
        </View>
        <TextInput
          placeholder={'Search....'}
          onChangeText={onChange}
          placeholderTextColor={colors.GRAY_TEXT}
          style={{
            marginStart: getHeight(35),
            alignItems: 'center',
            color: colors.BLACK,
            flex: 1,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
const styles = StyleSheet.create({
  findAgentSearchView: {
    flexDirection: 'row',

    alignItems: 'center',

    borderColor: colors.GRAY_TEXT,
    backgroundColor: colors.WHITE,
  },
});
