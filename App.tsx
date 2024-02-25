/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import AppNavigation from './src/routes/AppNavigation';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppProvider} from './src/utils/AppContext';
import {useNavigation} from '@react-navigation/native';

function App() {
  const navigationRef = useNavigationContainerRef();
  useEffect(() => {
    getFCMToken();
  }, []);

  async function getFCMToken() {
    try {
      const token = await messaging().getToken();
      console.log('FCM Token:', token);
      await AsyncStorage.setItem('FCM_TOKEN', token);

      return token;
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  }
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

  useEffect(() => {
    Platform.OS === 'android' && requestPermission();
    // Register the onMessage listener
    const unsubscribeOnMessage = messaging().onMessage(
      async (remoteMessage: any) => {
        // Display a local notification
        onMessageReceived(remoteMessage);
        backgroundMessage(remoteMessage);
      },
    );

    return () => unsubscribeOnMessage();
  }, []);
  const backgroundMessage = (data: any) => {
    console.log(data, 'fgchjk');
  };
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
      }
    }
  };
  return (
    <AppProvider>
      <NavigationContainer ref={navigationRef}>
        <AppNavigation />
      </NavigationContainer>
    </AppProvider>
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
