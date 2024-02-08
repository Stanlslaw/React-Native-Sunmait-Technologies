import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  LogBox,
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import * as Yup from 'yup';

import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import cameraImage from '../../../../../2stepRN/Nav/src/assets/images/camera.png';
import galleryImage from '../../../../../2stepRN/Nav/src/assets/images/gallery.png';
import userImage from '../../../../../2stepRN/Nav/src/assets/images/user.png';
import {RootStackParamList} from '../../../App.tsx';
import Checkbox from '../../components/Checkbox';

interface UserValuesErrors {
  email?: string | null;
  phone?: string | null;
  password?: string | null;
  policy: boolean;
}

const userSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email not in correct format')
    .required('Email is required'),
  phone: Yup.string()
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
    .isTrue('You have to accept policy')
    .required('You have to accept policy'),
});

type Props = NativeStackScreenProps<RootStackParamList, 'Register'>;

export default function RegisterScreen({
  navigation,
  route,
}: Props): React.JSX.Element {
  const windowWidth: number = useWindowDimensions().width;
  const windowHeigth: number = useWindowDimensions().height;
  const snapPoints = useMemo(() => ['25%'], []);
  const snapPointsPolicy = useMemo(() => ['50%'], []);

  const [imageUri, setImageUri] = useState(null);
  const [formErrors, setFormErrors] = useState<UserValuesErrors | null>({
    email: null,
    phone: null,
    password: null,
    policy: false,
  });
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [password, setPassword] = useState(null);
  const [policy, setPolicy] = useState<boolean | null>(null);

  const policyModalRef = useRef<BottomSheet>(null);
  const bottomSheetRef = useRef<BottomSheet>(null);
  const emailRef = useRef<TextInput>(null);
  const phoneNumberRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const policyRef = useRef<TouchableOpacity>(null);

  const [isPasswordShown, setIsPasswordShown] = useState<boolean>(false);
  const openBottomModal = () => {
    bottomSheetRef.current?.snapToIndex(0);
  };
  const openPolicyModal = () => {
    policyModalRef.current?.snapToIndex(0);
  };
  const handleGallery = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
      bottomSheetRef.current.close();
    });
  };
  const handleCamera = async () => {
    await launchCamera({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
      bottomSheetRef.current.close();
    });
  };
  const handleFocus = nextRef => {
    nextRef.current?.focus();
  };

  useEffect(() => {
    handleValidation();
  }, [policy, email, phoneNumber, password]);
  const handlePolicyState = () => {
    console.log(policy);
    if (policy === null) {
      setPolicy(true);
      return;
    }
    setPolicy(!policy);
  };
  const handleValidation = () => {
    console.log(formErrors);
    try {
      const value = userSchema.validateSync(
        {email: email, phone: phoneNumber, password: password, policy: policy},
        {abortEarly: false},
      );
      setFormErrors(null);
    } catch (validationErrors) {
      const newErrors: Record<string, string> = {};
      (validationErrors as Yup.ValidationError).inner.forEach(
        (error: Yup.ValidationError) => {
          if (error.path) {
            newErrors[error.path] = error.message;
          }
        },
      );
      setFormErrors(newErrors);
    }
  };
  const handleFormEnding = () => {
    handleValidation();
    if (!formErrors) {
      Alert.alert('Are you sure?', undefined, [
        {
          text: 'Yes',
          onPress: () => {
            route.params.handleSignedIn();
          },
        },
        {
          text: 'No',
          style: 'cancel',
          onPress: () => {
            console.log('No pressed');
          },
        },
      ]);
    }
  };

  const handleIsPasswordShown = () => {
    setIsPasswordShown(!isPasswordShown);
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={styles.container}>
        <TouchableOpacity
          style={StyleSheet.compose(styles.imageContaner, {
            width: windowWidth * 0.25,
          })}
          onPress={openBottomModal}>
          {imageUri ? (
            <Image source={{uri: imageUri}} style={styles.image} />
          ) : (
            <Image source={userImage} style={styles.image} />
          )}
        </TouchableOpacity>
        <View style={{flex: 1, flexDirection: 'column'}} key="form">
          <Text style={styles.label}>Email:</Text>
          <TextInput
            style={styles.textInput}
            maxLength={64}
            placeholder="examle@smth.com"
            ref={emailRef}
            inputMode={'email'}
            keyboardType={'email-address'}
            onChangeText={setEmail}
            onSubmitEditing={() => {
              handleValidation();
              handleFocus(phoneNumberRef);
            }}
          />
          {email !== null && formErrors && formErrors.email ? (
            <Text style={{color: 'red'}}>{formErrors.email}</Text>
          ) : (
            <></>
          )}
          <Text style={styles.label}>Phone number:</Text>
          <TextInput
            style={styles.textInput}
            placeholder="+375291112233"
            maxLength={13}
            ref={phoneNumberRef}
            inputMode={'tel'}
            keyboardType={'number-pad'}
            onChangeText={setPhoneNumber}
            onSubmitEditing={() => {
              handleValidation();
              handleFocus(passwordRef);
            }}
          />
          {phoneNumber !== null && formErrors && formErrors.phone ? (
            <Text style={{color: 'red'}}>{formErrors.phone}</Text>
          ) : (
            <></>
          )}
          <Text style={styles.label}>Password:</Text>
          <View>
            <TextInput
              style={styles.textInput}
              secureTextEntry={!isPasswordShown}
              placeholder="Password"
              maxLength={32}
              ref={passwordRef}
              inputMode={'text'}
              keyboardType={'default'}
              onChangeText={setPassword}
              onSubmitEditing={() => {
                handleValidation();
                handleFocus(policyRef);
              }}
            />
            {
              <TouchableOpacity
                onPress={handleIsPasswordShown}
                style={{
                  position: 'absolute',
                  right: 4,
                  top: 16,
                }}>
                {isPasswordShown ? (
                  <Image
                    style={{width: 24, height: 24}}
                    source={require('../../../../../2stepRN/Nav/src/assets/images/visible.png')}
                  />
                ) : (
                  <Image
                    style={{width: 24, height: 24}}
                    source={require('../../../../../2stepRN/Nav/src/assets/images/hide.png')}
                  />
                )}
              </TouchableOpacity>
            }
          </View>
          {password !== null && formErrors && formErrors.password ? (
            <Text style={{color: 'red'}}>{formErrors.password}</Text>
          ) : (
            <></>
          )}
          <Checkbox
            onPress={handlePolicyState}
            isChecked={policy === null || !policy ? false : true}
            title={
              <Text>
                “I accept the{' '}
                <Text
                  style={{textDecorationLine: 'underline'}}
                  onPress={openPolicyModal}>
                  Privacy policy
                </Text>
                ”.
              </Text>
            }
          />
          {policy !== null && formErrors && formErrors.policy ? (
            <Text style={{color: 'red'}}>{formErrors.policy}</Text>
          ) : (
            <></>
          )}
          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              paddingTop: 24,
            }}>
            <Button
              disabled={formErrors ? true : false}
              onPress={handleFormEnding}
              title={'Next'}
            />
          </View>
        </View>
      </ScrollView>
      <BottomSheet
        ref={policyModalRef}
        enablePanDownToClose={true}
        snapPoints={snapPointsPolicy}
        index={-1}
        backgroundStyle={{backgroundColor: '#eaeaea'}}>
        <BottomSheetScrollView
          style={{flex: 1, paddingLeft: 24, paddingRight: 24, paddingTop: 24}}>
          <Text>
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
      <BottomSheet
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        snapPoints={snapPoints}
        index={-1}
        backgroundStyle={{backgroundColor: '#efefef'}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View>
            <TouchableOpacity
              style={{
                width: windowWidth * 0.2,
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
              }}
              onPress={handleCamera}>
              <View style={{aspectRatio: 1}}>
                <Image style={styles.image} source={cameraImage} />
              </View>
              <Text style={{textAlign: 'center', color: 'black'}}>Camera</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              style={{
                flexDirection: 'column',
                flex: 1,
                justifyContent: 'center',
                width: windowWidth * 0.2,
              }}
              onPress={handleGallery}>
              <View style={{aspectRatio: 1}}>
                <Image style={styles.image} source={galleryImage} />
              </View>
              <Text style={{textAlign: 'center', color: 'black'}}>Gallery</Text>
            </TouchableOpacity>
          </View>
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 24,
    paddingRight: 24,
  },
  imageContaner: {
    aspectRatio: 1,
    marginTop: 24,
    alignSelf: 'center',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  label: {
    marginTop: 12,
    fontSize: 14,
    color: 'black',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#e7e7e8',
    fontSize: 16,
    color: 'black',
  },
});
