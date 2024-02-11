import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
export default function ProfileNavButton({
  title,
  onPress,
  iconName,
  iconColor,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.content}>
        <Ionicons name={iconName} size={32} color={iconColor} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Ionicons
        name={'chevron-forward-outline'}
        size={32}
        color={'grey'}
        style={styles.arrow}
      />
    </TouchableOpacity>
  );
}
