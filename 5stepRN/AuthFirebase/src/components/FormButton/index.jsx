import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './style';

export default function FormButton({title, handlePress, paddingVertical = 32}) {
  const {colors} = useTheme();
  return (
    <View
      style={StyleSheet.compose(styles.container, {
        paddingVertical: paddingVertical,
      })}>
      <TouchableOpacity
        style={StyleSheet.compose(styles.buttonContainer, {
          backgroundColor: colors.text,
        })}
        onPress={handlePress}>
        <Text
          style={StyleSheet.compose(styles.title, {color: colors.background})}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
