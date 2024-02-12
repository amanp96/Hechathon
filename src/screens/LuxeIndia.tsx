import {View, Text} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../components/Header';
import LuxeTab from '../components/luxeComp/LuxeTab';

const LuxeIndia = () => {
  const iconData = [
    {comp: <Ionicons name="search" size={20} color={'#000'} />},
    {comp: <AntDesign name="hearto" size={20} color={'#000'} />},
    {comp: <SimpleLineIcons name="bag" size={20} color={'#000'} />},
  ];
  return (
    <View>
      <Header Icon={iconData} onIconPress={e => {}} />
      <View style={{}}>
        <LuxeTab />
      </View>
    </View>
  );
};

export default LuxeIndia;
