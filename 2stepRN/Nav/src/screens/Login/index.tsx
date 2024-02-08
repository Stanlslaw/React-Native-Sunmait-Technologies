import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../../../App.tsx';
type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
export default function LoginScreen({
  navigation,
  route,
}: Props): React.JSX.Element {
  const handleRegisterNavigation = () => {
    navigation.navigate('Register');
  };
  const handleLogin = () => {
    route.params.handleSignedIn();
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text onPress={handleRegisterNavigation}>Register</Text>
        <Button title={'Sign in'} onPress={handleLogin} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
