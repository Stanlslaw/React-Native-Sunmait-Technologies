import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {styles} from './styles';

export default function SearchScreen() {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text style={{color: colors.text}}>Search</Text>
      </View>
    </View>
  );
}
