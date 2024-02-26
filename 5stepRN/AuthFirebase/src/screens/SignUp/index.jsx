import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import auth from '@react-native-firebase/auth';
import {useTheme} from '@react-navigation/native';
import {Formik} from 'formik';
import React, {useMemo, useRef} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ReactNativeBiometrics from 'react-native-biometrics';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import * as Yup from 'yup';

import CheckBox from '../../components/Checkbox';
import FormButton from '../../components/FormButton';
import FormPasswordTextInput from '../../components/FormPasswordTextInput';
import FormTextInput from '../../components/FormTextInput';
import ImagePicker from '../../components/ImagePicker';
import {mmkvStore} from '../../mmkv/store';
import styles from './styles';

const signInValidationSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),

  email: Yup.string()
    .email('Email not in correct format')
    .required('Email is required'),
  phoneNumber: Yup.string()
    .matches(
      new RegExp(/^\+375(17|25|29|33|44)\d{7}$/),
      'Type Belarusian number like: +375293331122',
    )
    .required('Phone is required'),
  password: Yup.string()
    .min(8, 'Minimal password length is 8 symbols')
    .max(64, 'Maximal password length is 8 symbols')
    .matches(/\d/, 'Password must contain at least one digit')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .required('Password is required'),
  policy: Yup.boolean()
    .isTrue('Policy have to be accepted')
    .required('You have to accept policy'),
});
export default function SignUpScreen({navigation}) {
  const {colors} = useTheme();

  const lastNameRef = useRef();
  const emailRef = useRef();
  const phoneNumberRef = useRef();
  const passwordRef = useRef();
  const policyModalRef = useRef();

  const snapPointsPolicy = useMemo(() => ['50%'], []);
  const handleNextField = ref => {
    ref.current.focus();
  };
  const handleSignUp = async values => {
    Alert.alert('Biometric', 'Do you want to save you profile by fingerprint', [
      {
        text: 'Yes',
        onPress: async () => {
          const biometrics = new ReactNativeBiometrics({
            allowDeviceCredentials: true,
          });
          const {available, biometryType} =
            await biometrics.isSensorAvailable();
          if (available && biometryType === 'Biometrics') {
            const {success} = await biometrics.simplePrompt({
              promptMessage: 'Confirm you biometric',
            });
            if (success) {
              mmkvStore.set('biometric.isActive', true);
              mmkvStore.set('user.email', values.email);
              mmkvStore.set('user.password', values.password);
              console.log('biometric is saved');
              auth()
                .createUserWithEmailAndPassword(values.email, values.password)
                .then(res => {
                  res.user.phoneNumber = values.phoneNumber;
                  res.user.displayName =
                    values.firstName + ' ' + values.lastName;
                  console.log('User account created & signed in!');
                })
                .catch(error => {
                  if (error.code === 'auth/email-already-in-use') {
                    console.log('That email address is already in use!');
                  }

                  if (error.code === 'auth/invalid-email') {
                    console.log('That email address is invalid!');
                  }

                  console.error(error);
                });
            }
          } else {
            console.log('biometric is not allowed');
          }
        },
      },
      {
        text: 'No',
      },
    ]);
  };
  const openPolicyModal = () => {
    console.log('hi');
    policyModalRef.current?.snapToIndex(0);
  };
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Formik
            validationSchema={signInValidationSchema}
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              phoneNumber: '',
              password: '',
              policy: false,
            }}
            onSubmit={values => {
              handleSignUp(values);
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              setFieldValue,
              values,
              errors,
              isValid,
              touched,
            }) => (
              <View>
                <ImagePicker />
                <FormTextInput
                  value={values.firstName}
                  name={'firstName'}
                  label={'First name'}
                  placeholder={'John'}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleSubmitEditing={() => handleNextField(lastNameRef)}
                  errors={errors.firstName}
                  touched={touched.firstName}
                />
                <FormTextInput
                  value={values.lastName}
                  name={'lastName'}
                  label={'Last name'}
                  placeholder={'Smith'}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleSubmitEditing={() => handleNextField(emailRef)}
                  errors={errors.lastName}
                  touched={touched.lastName}
                  refer={lastNameRef}
                />
                <FormTextInput
                  value={values.email}
                  name={'email'}
                  label={'Email'}
                  placeholder={'Smth@youmailbox.com'}
                  keyboardType={'email-address'}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleSubmitEditing={() => handleNextField(phoneNumberRef)}
                  errors={errors.email}
                  touched={touched.email}
                  refer={emailRef}
                />
                <FormTextInput
                  value={values.phoneNumber}
                  name={'phoneNumber'}
                  label={'Phone number'}
                  placeholder={'+375297897891'}
                  keyboardType={'phone-pad'}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  handleSubmitEditing={() => handleNextField(passwordRef)}
                  errors={errors.phoneNumber}
                  touched={touched.phoneNumber}
                  refer={phoneNumberRef}
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
                <CheckBox
                  title={
                    <Text style={{color: colors.text}}>
                      “I accept the{' '}
                      <Text
                        onPress={openPolicyModal}
                        style={{textDecorationLine: 'underline'}}>
                        Privacy policy
                      </Text>
                      ”.
                    </Text>
                  }
                  name={'policy'}
                  value={values.policy}
                  handleChange={setFieldValue}
                  errors={errors.policy}
                  touched={touched.policy}
                />
                <FormButton title={'Sign up'} handlePress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
      <BottomSheet
        ref={policyModalRef}
        enablePanDownToClose={true}
        snapPoints={snapPointsPolicy}
        index={-1}
        backgroundStyle={{backgroundColor: '#e8e8e8'}}>
        <BottomSheetScrollView
          style={{flex: 1, paddingLeft: 24, paddingRight: 24, paddingTop: 24}}>
          <Text style={{color: 'black'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc rutrum
            felis at laoreet gravida. Aliquam ac feugiat turpis, ut varius orci.
            Suspendisse feugiat felis arcu, a posuere massa ultrices et.
            Maecenas purus neque, fermentum eget pellentesque eget, malesuada et
            mauris. Quisque auctor, metus sit amet ullamcorper auctor, mauris
            nulla auctor tellus, ut maximus metus orci et augue. Vivamus mattis
            mauris ac lacinia auctor. Morbi facilisis pellentesque viverra. Sed
            eget sapien et arcu volutpat mollis. Mauris commodo porttitor
            pulvinar. Donec eget tempus mi. Suspendisse non eleifend dui, eu
            malesuada turpis. Nam ante magna, pharetra et sem quis, consectetur
            imperdiet risus. Nulla et nibh eget mauris tristique tempus sed id
            massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Maecenas tortor neque, blandit eget tempus ut, rutrum sed dui.
            Maecenas ut accumsan mauris. Aenean in accumsan orci. Vestibulum
            posuere orci ligula, id elementum felis convallis vel. Curabitur vel
            tortor eget sem varius dictum. Curabitur consequat efficitur metus,
            nec mollis elit congue eu. Donec in malesuada sem. Vivamus laoreet
            tincidunt iaculis.
          </Text>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
