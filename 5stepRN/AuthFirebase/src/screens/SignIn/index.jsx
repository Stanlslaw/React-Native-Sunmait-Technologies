import auth from '@react-native-firebase/auth';
import {useTheme} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useRef, useState} from 'react';
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Yup from 'yup';

import FormButton from '../../components/FormButton/index';
import FormPasswordTextInput from '../../components/FormPasswordTextInput';
import FormTextInput from '../../components/FormTextInput';
import {mmkvStore} from '../../mmkv/store';
import {Auth} from '../../utils/auth.service';
import styles from './styles';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignInScreen({navigation}) {
  const {colors} = useTheme();
  const [signInError, setSignInError] = useState('');
  const handleSignIn = async values => {
    await Auth.SignIn(values.email, values.password);
  };
  const passwordRef = useRef();
  const handleNextField = ref => {
    ref.current.focus();
  };
  const handleBiometricSignIn = async values => {
    await Auth.SignInWithBiometric();
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Formik
          validationSchema={signInValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
            handleSignIn(values);
          }}>
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
            touched,
          }) => (
            <View>
              <FormTextInput
                value={values.email}
                name={'email'}
                label={'Email'}
                placeholder={'Smth@youmailbox.com'}
                keyboardType={'email-address'}
                handleChange={handleChange}
                handleBlur={handleBlur}
                handleSubmitEditing={() => handleNextField(passwordRef)}
                errors={errors.email}
                touched={touched.email}
              />
              <FormPasswordTextInput
                refer={passwordRef}
                value={values.password}
                name={'password'}
                label={'Password'}
                placeholder={'Password'}
                handleChange={handleChange}
                handleBlur={handleBlur}
                errors={errors.password}
                touched={touched.password}
              />
              <View>
                <Text style={styles.addText}>
                  Don't have an account?{' '}
                  <Text
                    style={StyleSheet.compose(styles.addNavText, colors.text)}
                    onPress={() => {
                      navigation.navigate('sign-up');
                    }}>
                    Register now
                  </Text>
                </Text>
              </View>
              <FormButton title={'Sign in'} handlePress={handleSubmit} />
              <TouchableOpacity
                onPress={() => handleBiometricSignIn(values)}
                style={{
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: colors.text}}>Sign in via biometric</Text>
                <Ionicons
                  style={{paddingTop: 8}}
                  name={'finger-print-outline'}
                  size={48}
                  color={colors.text}
                />
              </TouchableOpacity>
              {signInError && (
                <Text
                  style={{
                    color: 'red',
                    fontSize: 14,
                    textAlign: 'center',
                  }}
                />
              )}
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
