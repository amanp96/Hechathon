import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import MyCarousel from '../components/MyCarousel';
import {useDispatch, useSelector} from 'react-redux';
import {fetchProductList} from '../store/slice/productList';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getHeight, getWidth, height, width} from '../utils/utlities';
import Header from '../components/Header';
import {colors} from '../theme/colors';
import {fonts} from '../theme/fonts';
import Loader from '../components/Loader';

const Brands = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProductList('b'));
  }, []);
  const productList = useSelector(state => state.productList.productList);
  const loading = useSelector(state => state.productList.isLoading);
  const data = productList?.map(item => {
    return {
      image: item?.prodImage1,
      text: item?.prodName,
    };
  });
  const iconData = [
    {
      comp: (
        <MaterialIcons name="notifications-none" size={24} color={'#000'} />
      ),
    },
    {comp: <AntDesign name="hearto" size={20} color={'#000'} />},
    {comp: <SimpleLineIcons name="bag" size={20} color={'#000'} />},
  ];

  return (
    <View style={{flex: 1}}>
      <Header Icon={iconData} onIconPress={() => {}} />
      {loading && <Loader />}
      <ScrollView
        style={{
          flex: 1,
          paddingHorizontal: 10,
          display: loading ? 'none' : 'flex',
        }}>
        <Image
          style={{width: width, height: 200}}
          resizeMode="cover"
          source={{
            uri: 'https://preview.redd.it/myntra-coupon-code-v0-opigj5129wwa1.jpg?width=640&crop=smart&auto=webp&s=1ff20fb532d323385cdc03e4da8096643d712a6f',
          }}
        />
        <MyCarousel
          data={data}
          flag
          imageStyle={[styles.card, {height: 400, borderRadius: 10}]}
          sliderWidth={width}
        />
        <View style={{margin: 5}}>
          <Text style={styles.titleText}>Brands in Splotlight</Text>
          <MyCarousel
            data={data}
            flag
            imageStyle={[
              styles.card,
              {height: 100, width: width, borderRadius: 10},
            ]}
            sliderWidth={width}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Brands;
const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    flexDirection: 'row',
    marginHorizontal: 10,
    margin: 5,
    // width: getWidth(width / 1.15),
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
  titleText: {
    color: colors.BLACK,
    fontFamily: fonts.POPPINS_BOLD,
    fontWeight: '700',
    fontSize: 18,
  },
});
