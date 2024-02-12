import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {colors} from '../theme/colors';
import Header from '../components/Header';
import StaticImage from '../components/StaticImage';
import ImageSlider from '../components/ImageSlider';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MyCarousel from '../components/MyCarousel';

import TopNavigator from '../routes/TopNavigator';
import Toast from 'react-native-simple-toast';
import SearchView from '../components/homeComponent/SearchView';
import Category from '../components/homeComponent/Category';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContent} from '../store/slice/contentSlice';
import Loader from '../components/Loader';

const Luxe = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, [dispatch]);

  const contents = useSelector(state => state.content.category);

  const isLoading = useSelector(state => state.content.isLoading);
  const error = useSelector(state => state.content.error);
  const catagories = contents?.map(item => {
    return {
      image: item?.catImage,
      text: item?.catName,
      id: item?._id,
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

  const data = [
    {
      image: require('../assets/images/dummyImage.jpeg'),
      text: 'Brand Directory',
    },
    {
      image: require('../assets/images/dummyImage.jpeg'),
      text: 'Brand Directory',
    },
    {
      image: require('../assets/images/dummyImage.jpeg'),
      text: 'Brand Directory',
    },
    {
      image: require('../assets/images/dummyImage.jpeg'),
      text: 'Brand Directory',
    },
    {
      image: require('../assets/images/dummyImage.jpeg'),
      text: 'Brand Directory',
    },
    // catagories,
  ];
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        {isLoading && <Loader />}
        {error && Toast.show('error in loading the data', Toast.LONG)}
        <Header headerTitle="Luxe" Icon={iconData} onIconPress={() => {}} />
        <SearchView />
        <ScrollView style={{marginVertical: 10}}>
          <TopNavigator />

          <ImageSlider data={data} />

          <StaticImage />
          <MyCarousel data={data} />
          <Category catagories={catagories} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Luxe;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
