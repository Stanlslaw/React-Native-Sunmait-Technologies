import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';

import {changeUserAuthStatus} from '../../features/auth/authSlice';
import {styles} from './styles';

export default function SignUpScreen({navigation}) {
  const dispatch = useDispatch();
  const handleSignUp = () => {
    dispatch(changeUserAuthStatus());
  };
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text>SignUp</Text>
        <Button
          title={'Go to sign in'}
          onPress={() => {
            navigation.navigate('sign-in');
          }}
        />
        <Button title={'Sign Up'} onPress={handleSignUp} />
      </View>
    </View>
  );
}
