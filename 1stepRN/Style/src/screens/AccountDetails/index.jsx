import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import styles from './styles';

export default function AccountDetailsScreen({navigation}) {
  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPressOut={handleDoneButton}>
          <Text style={{color: 'blue', fontSize: 16, fontWeight: 400}}>
            Done
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const handleDoneButton = () => {
    navigation.navigate('profile');
  };
  return (
    <View style={styles.container}>
      <View style={StyleSheet.compose(styles.content, styles.center)}>
        <Text>Account Details</Text>
      </View>
    </View>
  );
}
