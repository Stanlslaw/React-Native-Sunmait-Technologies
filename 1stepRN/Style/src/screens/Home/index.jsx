import {useTheme} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {assets} from '../../assets/assets';
import {styles} from './styles';

export default function HomeScreen() {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text style={{color: colors.text}}>Home</Text>
      </View>
    </View>
  );
}
