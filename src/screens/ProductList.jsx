import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoute, useNavigation} from '@react-navigation/native';
import {fetchProductById} from '../store/slice/productSlice';
import {getFontSize, getHeight, getWidth, width} from '../utils/utlities';
import {fonts} from '../theme/fonts';
import {colors} from '../theme/colors';

const ProductList = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [productCount, setProductCount] = useState(0);
  const {id} = route.params;

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);
  const contents = useSelector(state => state.product?.product);

  const renderCard = ({item}) => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Purchase', {id});
          }}
          style={{flex: 1, margin: 5}}>
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
              {item?.prodDescription?.length > 50
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
    <View style={{alignItems: 'center', backgroundColor: '#fff'}}>
      {/* {productCount?.length / contents?.length} */}
      <FlatList data={contents} renderItem={renderCard} numColumns={2} />
    </View>
  );
};

export default ProductList;
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
