import {Alert} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';

import auth from '@react-native-firebase/auth';

import {mmkvStore} from '../mmkv/store';

class AuthService {
  async SignIn(email, password) {
    try {
      const res = await auth().signInWithEmailAndPassword(email, password);
      console.log('sign-in');
    } catch (err) {
      if (err.code === 'auth/invalid-credential') {
        console.log('Incorrect password or login');
        Alert.alert('Login error', 'Incorrect password or login, try again');
      } else {
        console.log(err.message);
      }
    }
  }
  async SignInWithBiometric() {
    const hasBiometic = mmkvStore.getBoolean('biometric.isActive');
    console.log(hasBiometic, mmkvStore.getAllKeys());
    if (hasBiometic) {
      const biometrics = new ReactNativeBiometrics({
        allowDeviceCredentials: true,
      });
      const {available, biometryType} = await biometrics.isSensorAvailable();
      if (available && biometryType === 'Biometrics') {
        const {success} = await biometrics.simplePrompt({
          promptMessage: 'Confirm you biometric',
        });
        if (success) {
          const email = mmkvStore.getString('user.email');
          const password = mmkvStore.getString('user.password');
          console.log(email, password);
          await this.SignIn(email, password);
        }
      }
    } else {
      Alert.alert(
        'Biometric',
        "You don't have saved biometric, use another authentication method",
      );
    }
  }
  async SignUp(email, password, phoneNumber, displayName, photoUrl) {
    try {
      const res = await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({
        displayName: displayName,
        photoURL: photoUrl,
      });
      Alert.alert(
        'Biometric',
        'Do you want to save you profile by fingerprint',
        [
          {
            text: 'Yes',
            onPress: () => this.SaveAuthDataByBiometric(email, password),
          },

          {
            text: 'No',
          },
        ],
      );
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (err.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(err);
    }
  }
  async SaveAuthDataByBiometric(email, password) {
    const biometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });
    const {available, biometryType} = await biometrics.isSensorAvailable();
    if (available && biometryType === 'Biometrics') {
      const {success} = await biometrics.simplePrompt({
        promptMessage: 'Confirm you biometric',
      });
      if (success) {
        mmkvStore.set('biometric.isActive', true);
        mmkvStore.set('user.email', email);
        mmkvStore.set('user.password', password);
        console.log('biometric is saved');
      } else {
        console.log('Number of attempts are gone');
      }
    } else {
      console.log('biometric is not allowed');
    }
  }
  ChangeBiometricUsage() {
    const biometric = mmkvStore.getBoolean('biometric.isActive');
    if (biometric) {
      mmkvStore.set('biometric.isActive', !biometric);
    } else {
      mmkvStore.set('biometric.isActive', !biometric);
    }
    return !biometric;
  }
}

export const Auth = new AuthService();
