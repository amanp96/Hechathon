/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import notifee from '@notifee/react-native';
import messaging, { firebase } from '@react-native-firebase/messaging';
import {name as appName} from './app.json';

if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'YOUR_API_KEY',
      authDomain: 'YOUR_AUTH_DOMAIN',
      projectId: 'YOUR_PROJECT_ID',
      storageBucket: 'YOUR_STORAGE_BUCKET',
      messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
      appId: 'YOUR_APP_ID',
    });
  }
notifee.onBackgroundEvent(async ({ type, detail }) => {
    console.log('Background event:', detail.notification);
  
    // Handle background events as needed
  });
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(remoteMessage,'vbjkn');
 notifee.displayNotification(JSON.parse(message.data.notifee));
    })
AppRegistry.registerComponent(appName, () => App);
