import {View, Text, Image, ImageBackground, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const Caurosal = ({}) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const renderImage = () => {
    return (
      <ImageBackground
        source={{
          uri: 'data:image/jpeg;base64,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',
        }}
        style={styles.imageBackground}>
        <Image
          source={require('../assets/play.png')}
          style={{height: 50, width: 50}}
        />
      </ImageBackground>
    );
  };
  return (
    <View>
      <Carousel
        data={[1, 2, 3]}
        renderItem={renderImage}
        sliderWidth={wp('100%')}
        itemWidth={wp('100%')}
        layout={'default'}
        loop={true}
        autoplay={true}
        autoplayInterval={3000}
        onSnapToItem={index => setActiveSlide(index)}
      />
      <Text style={styles.text}>{`Step ${activeSlide + 1}/${3}`}</Text>
      <Pagination
        dotsLength={3}
        activeDotIndex={activeSlide}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
        }}
        dotStyle={{
          width: wp(25),
          height: 5,
          borderRadius: 5,
          marginHorizontal: 8,
          backgroundColor: '#4F63EA', // Change the color as needed
        }}
        inactiveDotStyle={{
          backgroundColor: '#C7C7C7', // Change the color as needed
        }}
        inactiveDotOpacity={0.6}
        inactiveDotScale={0.8}
      />
    </View>
  );
};

export default Caurosal;
export const styles = StyleSheet.create({
  imageBackground: {
    height: hp('25%'),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    left: wp(5),
    bottom: hp(8),
    position: 'absolute',
    color: '#fff',
    fontWeight: '500',
  },
});
