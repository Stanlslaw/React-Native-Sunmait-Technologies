import React, {useEffect} from 'react';
import {Alert, PermissionsAndroid} from 'react-native';

import messaging from '@react-native-firebase/messaging';

import RootNavigation from '../AuthFirebase/src/navigation/RootNavigation.jsx';

import {Notification} from './src/utils/notification.service.js';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
function App(): React.JSX.Element {
  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);
  return <RootNavigation />;
}
export default App;
