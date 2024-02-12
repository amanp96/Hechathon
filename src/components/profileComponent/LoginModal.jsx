// LoginModal.tsx

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getHeight, getWidth, width} from '../../utils/utlities';
import Entypo from 'react-native-vector-icons/Entypo';
import {CrossIcon} from '../../theme/icons';
import {fonts} from '../../theme/fonts';
import {useDispatch} from 'react-redux';
import {signUp} from '../../store/slice/authSlice';

const LoginModal = ({isVisible, onClose, onLogin}) => {
  const [mobile, setMobile] = useState('');
  // const [auth, setAuth] = useState({
  //   name: '',
  //   email: '',
  //   password: '',
  //   mobile: '',
  // });
  const dispatch = useDispatch();
  const handleLogin = () => {
    // const updateAuth = {
    //   ...auth,
    //   mobile: auth.mobile ? Number(auth.mobile) : null,
    // };
    // const updateData = {user: updateAuth};
    const data = dispatch(signUp(mobile));

    // Implement your authentication logic here
    // For simplicity, we'll call the onLogin callback if credentials are valid
    onLogin();
    onClose();
  };

  return (
    <View style={{}}>
      <Modal isVisible={isVisible} onBackdropPress={onClose}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: 'row',

              alignItems: 'center',
              paddingHorizontal: 20,
              paddingVertical: 10,
            }}>
            <View style={{flex: 1}}>
              <Image
                source={{
                  uri: 'https://cdn.iconscout.com/icon/free/png-256/free-myntra-2709168-2249158.png',
                }}
                style={styles.logoImage}
              />
            </View>
            <Entypo
              name="cross"
              size={20}
              onPress={() => {
                onClose();
              }}
            />
          </View>
          <Image
            source={require('../../assets/images/dummyImage.jpeg')}
            style={{width: '100%', height: 100}}
            resizeMode="cover"
          />
          <Text style={styles.logo}>Login/SignUp</Text>
          {/* <Text style={styles.logo}>Myntra</Text> */}
          {/* <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Name"
              placeholderTextColor="#003f5c"
              onChangeText={text => {
                setAuth(prev => ({...prev, name: text}));
              }}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="Email"
              placeholderTextColor="#003f5c"
              onChangeText={text => {
                setAuth(prev => ({...prev, email: text}));
              }}
            />
          </View> */}
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="mobile"
              placeholderTextColor="#003f5c"
              onChangeText={text => {
                setMobile(text);
              }}
            />
          </View>
          {/* <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              placeholder="password"
              placeholderTextColor="#003f5c"
              onChangeText={text => {
                setAuth(prev => ({...prev, password: text}));
              }}
            />
          </View> */}

          <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
            <Text style={styles.loginText}>Continue</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',

    left: 0,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    flex: 1,
    borderTopRightRadius: 10,
  },

  logo: {
    fontFamily: fonts.POPPINS_BOLD,

    fontSize: 16,
    color: '#000',
    marginVertical: 5,
  },
  logoImage: {
    width: getWidth(30),
    height: getHeight(30),
  },
  inputView: {
    // backgroundColor: '#465881',
    borderRadius: 5,
    height: 50,
    borderWidth: 0.5,
    marginTop: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#000',
  },
  loginBtn: {
    backgroundColor: '#FB5B5A',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  loginText: {
    color: 'white',
  },
  closeButton: {
    color: '#FB5B5A',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginModal;
