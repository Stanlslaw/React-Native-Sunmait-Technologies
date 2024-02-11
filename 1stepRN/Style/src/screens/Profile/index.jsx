import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {changeUserAuthStatus} from '../../features/auth/authSlice';
import {styles} from './styles';
export default function ProfileScreen({navigation}) {
  const dispatch = useDispatch();
  const handleLogout = () => {
    Alert.alert('Are you sure to logout?', '', [
      {
        text: 'Yes',
        onPress: () => {
          dispatch(changeUserAuthStatus());
        },
      },
      {
        text: 'No',
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Button
          title={'Settings'}
          onPress={() => navigation.navigate('settings')}
        />
        <Button
          title={'Acconunt Details'}
          onPress={() => navigation.navigate('account-details')}
        />
        <Button
          title={'Favorites'}
          onPress={() => navigation.navigate('favorites')}
        />
        <Button title={'Logout'} onPress={handleLogout} />
      </View>
    </View>
  );
}
