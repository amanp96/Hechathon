import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import {fetchProductById} from '../store/slice/productSlice';
import {useDispatch} from 'react-redux';

const Purchase: React.FC = ({}) => {
  const route = useRoute();
  const dispatch = useDispatch();
  const {id} = route.params;
  console.log(id);
  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [id]);
  return (
    <View style={{}}>
      <View>
        {/* <ImageBackground source={{uri: {}}}></ImageBackground> */}
      </View>
    </View>
  );
};

export default Purchase;
