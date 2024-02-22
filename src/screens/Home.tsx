import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Formik} from 'formik';
import LinearGradient from 'react-native-linear-gradient';
import React, {useEffect, useState} from 'react';
import Form from '../components/Form';
import PersonalInfo from '../components/PersonalInfo';
import Caurosal from '../components/Caurosal';

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <StatusBar animated={true} barStyle={'light-content'} />
        <Caurosal />
        <ScrollView>
          <PersonalInfo />
          <Form />
        </ScrollView>
      </KeyboardAwareScrollView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
