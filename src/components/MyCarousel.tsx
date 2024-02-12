import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {getWidth, width} from '../utils/utlities';

const MyCarousel = ({data, flag, imageStyle, sliderWidth}: any) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const renderItem = ({item}: any) => {
    return (
      <View style={styles.carouselItem}>
        <Image
          source={flag ? {uri: item.image} : item.image}
          style={[styles.image, imageStyle]}
          resizeMode="cover"
        />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        // layout="tinder"
        layoutCardOffset={18}
        data={data}
        renderItem={renderItem}
        sliderWidth={sliderWidth || 300}
        itemWidth={getWidth(width)}
        autoplay={true}
        autoplayInterval={300}
        onSnapToItem={index => setActiveIndex(index)}
      />
      <Pagination
        dotsLength={data.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotStyle={styles.dot}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',

    padding: 5,
    alignItems: 'center',
  },
  carouselItem: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',

    width: width,
  },
  image: {
    width: '100%',
    height: 50,
  },
  text: {
    padding: 10,
    textAlign: 'center',
  },
  paginationContainer: {
    paddingVertical: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: '#000',
  },
});

export default MyCarousel;
