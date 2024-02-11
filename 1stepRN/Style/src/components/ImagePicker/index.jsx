import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';

import userImage from '../../assets/images/avatar-design.png';
import styles from './styles';

export default function ImagePicker() {
  const windowWidth = useWindowDimensions().width;

  const [imageUri, setImageUri] = useState(undefined);

  const handleGallery = async () => {
    await launchImageLibrary({mediaType: 'photo'}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImageUri(response.assets[0].uri);
      }
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
    });
  };
  return (
    <View
      style={StyleSheet.compose(styles.container, {width: windowWidth * 0.3})}>
      <TouchableOpacity
        onPress={handleGallery}
        style={StyleSheet.compose(styles.imageContainer, {
          width: windowWidth * 0.3,
          borderRadius: windowWidth * 0.3,
        })}>
        {imageUri ? (
          <Image source={{uri: imageUri}} style={styles.image} />
        ) : (
          <Image source={userImage} style={styles.image} />
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.cameraPicker} onPress={handleCamera}>
        <Ionicons name={'camera-outline'} size={28} color={'black'} />
      </TouchableOpacity>
    </View>
  );
}
