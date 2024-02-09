import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {styles} from './styles';

export default function AccountDetailsScreen() {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text>Account Details</Text>
      </View>
    </View>
  );
}
