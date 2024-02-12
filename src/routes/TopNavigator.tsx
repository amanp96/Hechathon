import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {getHeight, getWidth, width} from '../utils/utlities';

const TopNavigator = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const data = [
    {Image: require('../assets/images/dummyImage.jpeg'), text: 'Fashion'},
    {Image: require('../assets/images/dummyImage.jpeg'), text: 'Beauty'},
    {Image: require('../assets/images/dummyImage.jpeg'), text: 'Home'},
  ];
  return (
    <View
      style={{
        // padding: 10,
        flexDirection: 'row',

        // height: 120,
        paddingHorizontal: 10,
        alignItems: 'center',

        flex: 0.5,
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        {data.map((item: any, index: number) => {
          return (
            <TouchableOpacity
              onPress={() => {
                setCurrentIndex(index);
              }}
              style={{
                maxWidth: getWidth(100),
                borderWidth: 1,
                borderColor: '#000',
                marginHorizontal: 5,
                flexDirection: 'row',
                backgroundColor: index === currentIndex ? '#000' : '#fff',
                borderRadius: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={item?.Image}
                style={{
                  width: getHeight(30),
                  height: getHeight(30),
                  paddingHorizontal: 5,
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: index === currentIndex ? '#fff' : '#000',
                  fontSize: 12,
                  marginHorizontal: 5,
                }}>
                {item?.text}
              </Text>
            </TouchableOpacity>
          );
        })}
        <TouchableOpacity style={{justifyContent: 'center'}}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTG_qsvtr8-9Srz6oLaRbW7kSUmCwgCvivyQ&usqp=CAU',
            }}
            style={{width: 40, height: 35}}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopNavigator;
