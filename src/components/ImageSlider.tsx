import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {getFontSize} from '../utils/utlities';

const ImageSlider = ({data}: any) => {
  const renderCard = ({item}: any) => {
    console.log(item);
    return (
      <View
        style={{
          width: 120,
          alignItems: 'center',
          justifyContent: 'center',
          height: 150,
        }}>
        <Image source={item?.image} style={{height: 100, width: 100}} />
        <Text style={{fontSize: getFontSize(12), padding: 5, color: '#000'}}>
          {item?.text}
        </Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList horizontal data={data} renderItem={renderCard} />
    </View>
  );
};

export default ImageSlider;
