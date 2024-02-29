import {Alert} from 'react-native';

import messaging from '@react-native-firebase/messaging';

class NotificationService {
  constructor() {
    this.remoteMessage = {};
  }
  async NotificationListener() {
    const message = await messaging().getInitialNotification();

    const unsubscribe = messaging().onNotificationOpenedApp(remoteMessage => {
      console.log(remoteMessage);
      this.remoteMessage = remoteMessage;
    });
    console.log(message);
  }
}
export const Notification = new NotificationService();
