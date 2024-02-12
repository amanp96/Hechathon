/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';


messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log(remoteMessage)
      // Create a channel (required for Android)

      const channelId = await notifee.createChannel({
        id: 'default',
        name: 'Default Channel',
      });
    const {title, body, ...otherNotificationFields} = remoteMessage.notification;

    // Display the notification using notifee
    await notifee.displayNotification({
      title,
      body,
      android: {
        channelId: channelId, // Specify your Android channel ID
        // Other Android-specific options can be included here
        ...otherNotificationFields.android,
      },
      // Other cross-platform options can be included here
      // Example: ios: { sound: 'default' }
    });
  });

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
