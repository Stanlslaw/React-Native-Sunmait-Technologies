import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function ProfileScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
