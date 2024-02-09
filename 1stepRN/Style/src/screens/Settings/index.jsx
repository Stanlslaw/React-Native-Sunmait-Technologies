import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {styles} from './styles';
export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text>Settings</Text>
      </View>
    </View>
  );
}
