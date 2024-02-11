import {Formik} from 'formik';
import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import * as Yup from 'yup';

import FormButton from '../../components/FormButton/index';
import FormPasswordTextInput from '../../components/FormPasswordTextInput';
import FormTextInput from '../../components/FormTextInput';
import {changeUserAuthStatus} from '../../features/auth/authSlice';
import styles from './styles';

const signInValidationSchema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export default function SignInScreen({navigation}) {
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(changeUserAuthStatus());
  };
  const passwordRef = useRef();
  const handleNextField = ref => {
    ref.current.focus();
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Formik
          validationSchema={signInValidationSchema}
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
            handleSignIn();
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
                    style={styles.addNavText}
                    onPress={() => {
                      navigation.navigate('sign-up');
                    }}>
                    Register now
                  </Text>
                </Text>
              </View>
              <FormButton title={'Sign in'} handlePress={handleSubmit} />
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
}
