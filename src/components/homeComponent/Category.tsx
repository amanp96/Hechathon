import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {getWidth} from '../../utils/utlities';
import {useNavigation} from '@react-navigation/native';

interface IProps {
  catagories: any;
}
const Category: React.FC<IProps> = ({catagories}) => {
  const naigation = useNavigation();
  const renderCard = ({item}: any) => {
    return (
      <TouchableOpacity
        onPress={() => {
          //@ts-ignore
          naigation.navigate('ProductList', {id: item?.id});
        }}
        style={{padding: 5, width: getWidth(150), borderWidth: 0.5, margin: 2}}>
        <View
          style={{
            padding: 5,

            alignItems: 'center',
          }}>
          <Image
            source={{uri: item?.image}}
            style={{width: getWidth(100), height: getWidth(120)}}
            resizeMode="contain"
          />
          <View style={styles.contenView}>
            <Text style={{color: '#000'}}>{item?.text}</Text>
            {/* <Text>{item?.desc}</Text> */}
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList data={catagories} renderItem={renderCard} horizontal />
    </View>
  );
};

export default Category;
const styles = StyleSheet.create({
  contenView: {
    borderWidth: 0.5,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
