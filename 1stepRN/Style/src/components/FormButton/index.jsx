import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';

export default function FormButton({title, handlePress, paddingVertical = 32}) {
  return (
    <View
      style={StyleSheet.compose(styles.container, {
        paddingVertical: paddingVertical,
      })}>
      <TouchableOpacity style={styles.buttonContainer} onPress={handlePress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
