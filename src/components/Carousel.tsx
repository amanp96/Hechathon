import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Platform,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useNavigation} from '@react-navigation/native';
import {width} from '../utils/utlities';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';

const CarouselComp = () => {
  const navigation = useNavigation();
  const carouselRef = useRef<Carousel<any>>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const Data = [
    {
      img_logo: require('../assets/images/dummyImage.jpeg'),
      text: 'Will Services',
      sub_text:
        'A Will represents your responsibility to your loved ones, ensuring that your estate will be fairly distributed and according to your wishes.',
    },
    {
      img_logo: require('../assets/images/dummyImage.jpeg'),
      text: 'Trust Administration',
      sub_text:
        'A trust provides security for your movable and immovable assets for your loved ones. A trust account can be created by any individual or corporate entity for specific purposes.',
    },
    {
      img_logo: require('../assets/images/dummyImage.jpeg'),
      text: 'Estate Administration',
      sub_text:
        'Estate Administration is the process of compiling and managing your assets, setting any debts, and distributing the remaining assets to the rightful beneficiaries.',
    },
  ];

  const handleNextPress = () => {
    if (activeIndex === Data.length - 1) {
      //@ts-ignore
      navigation.navigate('ChooseLanguage');
    } else {
      const nextIndex = activeIndex + 1;
      carouselRef.current?.snapToItem(nextIndex);
    }
  };

  const handleBackPress = () => {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      carouselRef.current?.snapToItem(prevIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Carousel
          ref={carouselRef}
          data={Data}
          renderItem={({item, index}) => (
            <View style={styles.carouselItem} key={index}>
              <View style={styles.imgView}>
                <Image source={item.img_logo} style={styles.logo} />
                <View style={styles.skipButton}>
                  <TouchableOpacity onPress={() => navigation.replace('Login')}>
                    <Text style={styles.skipText}>Skip</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.textContainer}>
                <View style={styles.box}>
                  <Text style={styles.text}>{item.text}</Text>
                </View>
                <View style={styles.subBox}>
                  <Text style={styles.subText}>{item.sub_text}</Text>
                </View>
              </View>
            </View>
          )}
          sliderWidth={width}
          itemWidth={width}
          layout="default"
          loop={false}
          autoplay={false}
          // autoplayInterval={3000}
          onSnapToItem={index => setActiveIndex(index)}
        />
        <View style={styles.paginationContainer}>
          <Pagination
            dotsLength={Data.length}
            activeDotIndex={activeIndex}
            containerStyle={styles.pagination}
            dotStyle={styles.paginationDot}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.7}
          />
          {/* <View style={{flexDirection: 'row', gap: 20}}>
            {activeIndex > 0 && (
              <TouchableOpacity
                style={styles.backButton}
                onPress={() => handleBackPress()}>
                <BackIcon />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.nextButton}
              onPress={() => handleNextPress()}>
              <ForwardIcon />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BLUE,
  },
  carouselItem: {
    flex: 0.7,
  },
  imgView: {
    position: 'relative', // To position the skip button relative to the imgView
    width: '100%',
    height: '100%', // Adjusted width to 80% of the screen
    aspectRatio: 1, // Maintain aspect ratio
    borderRadius: 5, // Adjusted border radius for a rounded look
    overflow: 'hidden',
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 195,
  },
  skipButton: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 5,
    right: 0,
    marginRight: 130,
    marginTop: Platform.OS == 'android' ? 50 : 20,
    padding: 5,
    height: 30,
    width: 50,
  },
  skipText: {
    color: '#1D4F91',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: fonts.POPPINS_SEMIBOLD,
  },

  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  box: {
    marginLeft: 20,
  },

  textContainer: {
    alignItems: 'flex-start',
    marginTop: 30,
  },

  text: {
    fontSize: 24,
    color: '#FDCA38',
    fontFamily: fonts.POPPINS_SEMIBOLD,
    fontWeight: '500',
    alignItems: 'flex-start',
    marginLeft: 15,
  },
  subBox: {
    paddingHorizontal: 20,
  },
  subText: {
    fontSize: 16,
    color: '#fff',
    alignItems: 'flex-start',
    marginLeft: 15,
    fontFamily: fonts.POPPINS_REGULAR,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    bottom: 40,
  },
  pagination: {},

  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#FDCA38',
  },

  nextButton: {
    backgroundColor: '#FDCA38',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
  backButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 5,
    padding: 5,
  },
});

export default CarouselComp;
