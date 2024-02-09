import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {styles} from './styles';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text>Search</Text>
      </View>
    </View>
  );
}
