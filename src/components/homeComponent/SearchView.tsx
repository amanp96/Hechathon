import {View, Text, TouchableOpacity} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const SearchView = () => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          navigation.navigate('HotTrends', {searchIndex: 0});
        }}
        style={{
          margin: 10,
          padding: 5,
          borderWidth: 1,
          borderRadius: 15,

          flexDirection: 'row',
        }}>
        <EvilIcons
          name="search"
          size={20}
          color={'#000'}
          style={{paddingHorizontal: 5}}
        />
        <Text style={{flex: 1}}>Search brands and products</Text>

        <SimpleLineIcons
          name="camera"
          size={20}
          color={'#000'}
          style={{paddingHorizontal: 10}}
        />
        <MaterialIcons
          name="mic-none"
          size={20}
          color={'#000'}
          style={{paddingHorizontal: 10}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchView;
