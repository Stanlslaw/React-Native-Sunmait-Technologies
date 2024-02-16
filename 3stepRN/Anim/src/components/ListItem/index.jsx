import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';

import stub from '../../assets/images/stub.jpg';
export default function ListItem({item, onPress}) {
  const {width} = useWindowDimensions();
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(item)}>
      <Animated.View
        sharedTransitionTag={'item-photo-shared'}
        style={[styles.imageContainer, {width: width * 0.6}]}>
        <Image style={styles.image} source={item.photo} />
      </Animated.View>
      <Text style={styles.text}>{item.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
  },
  imageContainer: {
    aspectRatio: 1,
    marginTop: 12,
    alignSelf: 'center',
  },
  image: {flex: 1, width: null, height: null, resizeMode: 'cover'},
  text: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
  },
});
