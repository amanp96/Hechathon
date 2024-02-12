import {View, Text} from 'react-native';
import React from 'react';
import SearchInput from './SearchInput';

interface IProps {
  Input: any;
}
const HeaderInput: React.FC<IProps> = ({Input}) => {
  return (
    <View>
      {Input === 0 && <SearchInput />}
      {Input === 1 && <Text>ghv</Text>}
    </View>
  );
};

export default HeaderInput;
