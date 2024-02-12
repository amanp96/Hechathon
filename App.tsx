/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import messaging from '@react-native-firebase/messaging';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import notifee from '@notifee/react-native';
import {Provider} from 'react-redux';
import {store} from './src/store/Store';
import AppNavigatior from './src/routes/AppNavigation';
import {fetchContent} from './src/store/slice/contentSlice';
import {constants} from './src/theme/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  useEffect(() => {
    registerForRemoteMessages();
  }, []);
  async function onMessageReceived(message: any) {
    const {title, body, ...otherNotificationFields} = message.notification;
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    // Display the notification using notifee
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId: channelId, // Specify your Android channel ID
        // Other Android-specific options can be included here
        ...otherNotificationFields.android,
      },
    });

    console.log('Message handled in the background!', message);
  }
  async function getFCMToken() {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
      await AsyncStorage.setItem(constants.FCM_TOKEN, token);

      return token;
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  }
  const requestNotificationPermission = async () => {
    const result = await request(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    return result;
  };
  const checkNotificationPermission = async () => {
    const result = await check(PERMISSIONS.ANDROID.POST_NOTIFICATIONS);
    return result;
  };

  const requestPermission = async () => {
    const checkPermission = await checkNotificationPermission();
    if (checkPermission !== RESULTS.GRANTED) {
      const request = await requestNotificationPermission();
      if (request !== RESULTS.GRANTED) {
      } else {
        getFCMToken();
      }
    }
  };
  useEffect(() => {
    {
      Platform.OS === 'android' && requestPermission();
    }
    // Register the onMessage listener
    const unsubscribeOnMessage = messaging().onMessage(
      async (remoteMessage: any) => {
        // Display a local notification
        onMessageReceived(remoteMessage);
      },
    );

    return () => unsubscribeOnMessage();
  }, []);

  async function registerForRemoteMessages() {
    try {
      await messaging().registerDeviceForRemoteMessages();
      console.log('Registered for remote messages');
      return true;
    } catch (error) {
      console.error('Error registering for remote messages:', error);
      return false;
    }
  }
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <AppNavigatior />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
