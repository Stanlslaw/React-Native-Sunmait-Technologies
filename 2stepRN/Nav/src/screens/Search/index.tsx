import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function SearchScreen(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
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
