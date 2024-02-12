import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useRoute, useNavigation} from '@react-navigation/native';
import CarouselComp from '../components/Carousel';
import ImageSlider from '../components/MyCarousel';
import MyCarousel from '../components/MyCarousel';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductById} from '../store/slice/productSlice';
import {fetchProductList} from '../store/slice/productList';
import SearchInput from '../components/SearchInput';
import {Image} from 'react-native';
import {getFontSize, getHeight, getWidth, width} from '../utils/utlities';
import {fonts} from '../theme/fonts';
import {colors} from '../theme/colors';
import Loader from '../components/Loader';

const HotTrends = () => {
  const route = useRoute();
  const {searchIndex} = route?.params ?? {};

  const [index, setIndex] = useState(null);
  const [searchQuary, setSearchQuary] = useState('a');
  const iconData = [
    {comp: <Ionicons name="search" size={20} color={'#000'} />},
    {comp: <AntDesign name="hearto" size={20} color={'#000'} />},
    {comp: <SimpleLineIcons name="bag" size={20} color={'#000'} />},
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductList(searchQuary));
  }, [searchQuary]);
  const productList = useSelector(state => state.productList.productList);
  const isLoading = useSelector(state => state.productList.isLoading);
  const error = useSelector(state => state.productList.error);
  const renderCard = ({item}) => {
    return (
      <View>
        <TouchableOpacity onPress={() => {}} style={{flex: 1, margin: 5}}>
          <View style={styles.card}>
            <Image
              source={{uri: item?.prodImage1}}
              style={{
                height: getHeight(100),
                width: getWidth(100),
                paddingVertical: getHeight(5),
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                color: '#000',
                fontSize: getFontSize(16),
                fontFamily: fonts.POPPINS_BOLD,
                textAlign: 'center',
              }}>
              {item?.prodName}
            </Text>
            <Text
              style={{
                color: '#000',
                textAlign: 'center',
                paddingHorizontal: 5,
              }}>
              {item?.prodDescription.length > 50
                ? item?.prodDescription.slice(0, 50)
                : item?.prodDescription}
            </Text>

            <Text style={{color: '#000'}}>{item?.prodPrice}Rs.</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      {isLoading && <Loader />}
      <View style={{flex: 1, display: isLoading ? 'none' : 'flex'}}>
        {error && Toast.show('error in loading the data', Toast.LONG)}
        {searchIndex !== 0 && (
          <Header
            Icon={iconData}
            onIconPress={e => {
              setIndex(e);
            }}
          />
        )}

        {(index === 0 || searchIndex === 0) && (
          <SearchInput
            onChange={e => {
              setSearchQuary(e);
            }}
          />
        )}
        <FlatList data={productList} renderItem={renderCard} numColumns={2} />
      </View>
    </>
  );
};

export default HotTrends;
const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    margin: 5,
    width: getWidth(width / 2.6),
    height: getHeight(230),
    //   backgroundColor: 'red',
    //   justifyContent: 'center',
    paddingVertical: getHeight(10),
    alignItems: 'center',

    // backgroundColor: colors.WHITE,
    borderRadius: 8,
  },
});
