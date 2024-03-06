import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import Toast from 'react-native-simple-toast';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';

const LoginScreen = () => {
  const [user, setUser] = useState({email: '', password: ''});
  const navigation = useNavigation();
  const handleLogin = () => {
    const axiosInstance = axios.create();
    axiosInstance
      .post('http://localhost:8000/Login', user)
      .then(res => Toast.show(res?.data?.message, Toast.LONG))
      .catch(err => console.log(err));
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={{
            uri: 'https://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png',
          }}
          style={{height: 100, width: 150}}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', color: '#041E42'}}>
            Login into your Account
          </Text>
          <View style={{marginTop: '20%'}}>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 5,
                backgroundColor: '#D0D0D0',
                gap: 10,
                paddingVertical: 5,
                alignItems: 'center',
              }}>
              <Fontisto name="email" size={20} style={{marginLeft: 10}} />
              <TextInput
                value={user?.email}
                placeholder="Please Enter your email"
                onChangeText={e => setUser(prev => ({...prev, email: e}))}
                style={{width: '75%', paddingVertical: 10}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                borderRadius: 5,
                marginTop: 30,
                backgroundColor: '#D0D0D0',
                gap: 10,
                paddingVertical: 5,
                alignItems: 'center',
              }}>
              <Feather name="unlock" size={20} style={{marginLeft: 10}} />
              <TextInput
                value={user?.password}
                secureTextEntry
                placeholder="Please Enter your Password"
                onChangeText={e => setUser(prev => ({...prev, password: e}))}
                style={{width: '75%', paddingVertical: 10}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingVertical: 10,
              }}>
              <Text style={{fontWeight: '500'}}>Keep Me Logged In</Text>
              <Text style={{color: '#007FFF', fontWeight: 'bold'}}>
                Forgot Password
              </Text>
            </View>
          </View>
          <Pressable
            onPress={handleLogin}
            style={{
              marginTop: '10%',
              width: 200,
              backgroundColor: '#FEBE10',
              alignItems: 'center',
              borderRadius: 5,
              padding: 15,
              marginBottom: '2%',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Login</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Register')}>
            <Text style={{color: 'gray', fontWeight: '500'}}>
              Don't have an account? Sign Up
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
