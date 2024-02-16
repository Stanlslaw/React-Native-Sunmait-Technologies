import React from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import Animated from 'react-native-reanimated';

export default function ItemScreen({navigation, route}) {
  const {description, id, photo, title} = route.params;
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.goBack()}>
        <Animated.View
          sharedTransitionTag={'item-photo-shared'}
          style={[styles.imageContainer, {width: width}]}>
          <Image source={photo} style={styles.image} />
        </Animated.View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    aspectRatio: 1,
    marginTop: 12,
    alignSelf: 'center',
  },
  image: {flex: 1, width: null, height: null, resizeMode: 'cover'},
  title: {textAlign: 'center'},
  description: {
    textAlign: 'center',
  },
});
