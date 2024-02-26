import auth from '@react-native-firebase/auth';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch} from 'react-redux';

import ImagePicker from '../../components/ImagePicker';
import ProfileNavButton from '../../components/ProfileNavButton';
import {changeUserAuthStatus} from '../../features/auth/authSlice';
import styles from './styles';
export default function ProfileScreen({navigation}) {
  const {colors} = useTheme();
  const handleLogout = () => {
    Alert.alert('Are you sure to logout?', '', [
      {
        text: 'Yes',
        onPress: () => {
          auth()
            .signOut()
            .then(() => {
              console.log('sign-out');
            });
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
        <View>
          <ImagePicker />
          <Text
            style={StyleSheet.compose(styles.userName, {color: colors.text})}>
            Jonh Smith
          </Text>
        </View>
        <View style={styles.navigationContainer}>
          <ProfileNavButton
            iconColor={'red'}
            iconName={'heart'}
            title={'Favorites'}
            onPress={() => navigation.navigate('favorites')}
          />
          <ProfileNavButton
            iconColor={'blue'}
            iconName={'person-circle-outline'}
            title={'Account Details'}
            onPress={() => navigation.navigate('account-details')}
          />
          <ProfileNavButton
            iconColor={'grey'}
            iconName={'settings-outline'}
            title={'Settings'}
            onPress={() => {
              navigation.navigate('settings');
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.logoutButtonContainer}
          onPress={handleLogout}>
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
