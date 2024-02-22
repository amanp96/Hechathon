import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import React, {useState} from 'react';

import * as Yup from 'yup';

interface FormValue {
  firstName: string;
  lastName: string;
  phone: number | string;
  email: string;
  country: string;
  city: string;
  experience: any;
}
const Form = () => {
  const initialValues: FormValue = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    country: '',
    city: '',
    experience: '',
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('name is required').label('Name'),
    email: Yup.string()
      .email('Please enter valid email')
      .required('Email is required')
      .label('Email'),
    phone: Yup.string().required(),
  });
  const onSubmit = async (values: FormValue) => {
    const dataString = Object.entries(values)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    Alert.alert('User Details', dataString);
  };
  return (
    <View style={{paddingHorizontal: '5%'}}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validateOnMount>
        {({isValid, setFieldValue, values, handleSubmit, errors}) => (
          <View>
            <View style={{paddingVertical: 10}}>
              <View style={styles.container1}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../assets/user1.png')}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  style={styles.input1}
                  placeholder="First Name"
                  value={values?.firstName}
                  placeholderTextColor={'#000'}
                  onChangeText={text => {
                    setFieldValue('firstName', text);
                  }}
                />
              </View>
              <View style={styles.borderBottom} />
              {errors.firstName && (
                <Text style={styles.errorText}>firstName is required</Text>
              )}
            </View>
            <View style={{paddingVertical: 10}}>
              <View style={styles.container1}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../assets/user1.png')}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  style={styles.input1}
                  placeholder="last Name"
                  placeholderTextColor={'#000'}
                  value={values?.lastName}
                  onChangeText={text => {
                    setFieldValue('lastName', text);
                  }}
                />
              </View>
              <View style={styles.borderBottom} />
            </View>
            <View style={{paddingVertical: 10}}>
              <View style={styles.container1}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../assets/email.png')}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  style={styles.input1}
                  placeholder="Email"
                  placeholderTextColor={'#372b2b'}
                  value={values?.email}
                  onChangeText={text => {
                    setFieldValue('email', text);
                  }}
                />
              </View>

              <View style={styles.borderBottom1} />
              {errors.email && (
                <Text style={styles.errorText}>valid mail required</Text>
              )}
            </View>
            <View style={{paddingVertical: 10}}>
              <View style={styles.container1}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../assets/phone.png')}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  style={styles.input1}
                  placeholder="Phone"
                  placeholderTextColor={'#372b2b'}
                  value={values?.phone.toString()}
                  onChangeText={text => {
                    setFieldValue('phone', text);
                  }}
                  maxLength={11}
                  keyboardType={'phone-pad'}
                />
              </View>
              <View style={styles.borderBottom1} />
              {errors.phone && (
                <Text style={{color: 'red', paddingLeft: 20}}>
                  phone is required
                </Text>
              )}
            </View>
            <View style={{paddingVertical: 10}}>
              <View style={styles.container1}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../assets/world.png')}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  style={styles.input1}
                  placeholder="Country"
                  placeholderTextColor={'#372b2b'}
                  value={values?.country}
                  onChangeText={text => {
                    setFieldValue('country', text);
                  }}
                />
              </View>
              <View style={styles.borderBottom1} />
            </View>
            <View style={{paddingVertical: 10}}>
              <View style={styles.container1}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../assets/glyph.png')}
                    resizeMode="contain"
                    style={styles.img}
                  />
                </View>
                <TextInput
                  style={styles.input1}
                  placeholder="City"
                  placeholderTextColor={'#372b2b'}
                  value={values?.city}
                  onChangeText={text => {
                    setFieldValue('city', text);
                  }}
                />
              </View>
              <View style={styles.borderBottom1} />
            </View>
            <View style={{paddingVertical: 10}}>
              <View style={styles.container1}>
                <View style={styles.imageView}>
                  <Image
                    source={require('../assets/certificate.png')}
                    style={styles.img}
                  />
                </View>
                <TextInput
                  style={styles.input1}
                  placeholder="Experience"
                  placeholderTextColor={'#372b2b'}
                  value={values?.experience}
                  onChangeText={text => {
                    setFieldValue('experience', text);
                  }}
                />
              </View>
              <View style={styles.borderBottom1} />
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                handleSubmit();
              }}>
              <LinearGradient
                colors={['#4D62E3', '#2B304D']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={styles.gradient}>
                <Text style={styles.buttonText}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
const styles = StyleSheet.create({
  gradient: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 2,
    flex: 1,
  },
  input1: {
    height: 40,
    borderColor: '#000',
    paddingHorizontal: 10,
    marginLeft: 40,
    flex: 1,
  },
  imageView: {
    position: 'absolute',
    left: 12,
    justifyContent: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 0.5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {height: 18, width: 18},
  errorText: {
    color: 'red',
    paddingLeft: 20,
  },
  borderBottom: {
    borderBottomWidth: 0.5,
    height: 1,
    width: '100%',
  },
  borderBottom1: {
    borderBottomWidth: 0.25,
    height: 1,
    width: '100%',
    borderColor: 'gray',
  },
});
