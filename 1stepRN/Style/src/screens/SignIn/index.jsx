import React from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {changeUserAuthStatus} from '../../features/auth/authSlice';
import {styles} from './styles';

export default function SignInScreen({navigation}) {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(changeUserAuthStatus());
  };
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text>SignIn</Text>
        <Button
          title={'Go to sign up'}
          onPress={() => {
            navigation.navigate('sign-up');
          }}
        />
        <Button title={'Sign In'} onPress={handleSignIn} />
      </View>
    </View>
  );
}
