import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../theme/colors';
import GenralButton from '../GenralButton';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import LoginModal from './LoginModal';

const UserProfile = ({onLogin}: any) => {
  const [loginModal, setLoginModal] = useState(false);
  return (
    <View style={{}}>
      <View style={{backgroundColor: 'gray', height: 100}} />

      <View style={{backgroundColor: colors.WHITE, height: 100}} />
      <View>
        <View
          style={{
            position: 'absolute',
            bottom: 80,

            alignItems: 'flex-end',
            right: 50,
          }}>
          <GenralButton
            onPress={() => {
              setLoginModal(true);
            }}
            titleText="Login/Sign Up"
            containerStyles={{width: '80%', backgroundColor: 'pink'}}
          />
        </View>
      </View>
      <LoginModal
        isVisible={loginModal}
        onClose={() => setLoginModal(false)}
        onLogin={() => {}}
      />
    </View>
  );
};

export default UserProfile;
