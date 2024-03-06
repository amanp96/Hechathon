import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-simple-toast';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({name: '', email: '', password: ''});
  const navigation = useNavigation();
  const handleRegister = () => {
    const axiosInstance = axios.create();
    axiosInstance
      .post('http://localhost:8000/Register', user)
      .then(res => {
        if (res?.data?.Message) {
          Toast.show(res?.data?.Message, Toast.LONG);
          navigation.goBack();
        }
      })
      .catch(err => Toast.show('Registration Failed', Toast.LONG));
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
              <AntDesign name="user" size={20} style={{marginLeft: 10}} />
              <TextInput
                value={user?.name}
                placeholder="Please Enter your name"
                onChangeText={e => setUser(prev => ({...prev, name: e}))}
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
            onPress={handleRegister}
            style={{
              marginTop: '10%',
              width: 200,
              backgroundColor: '#FEBE10',
              alignItems: 'center',
              borderRadius: 5,
              padding: 15,
              marginBottom: '3%',
            }}>
            <Text style={{color: '#fff', fontWeight: 'bold'}}>Register</Text>
          </Pressable>
          <Pressable onPress={() => navigation.goBack()}>
            <Text style={{color: 'gray', fontWeight: '500'}}>
              Already have an account? Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({});
