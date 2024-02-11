import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
export default function CheckBox({name, value, handleChange, title, errors}) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            handleChange(name, !isChecked);
            setIsChecked(!isChecked);
          }}>
          {!isChecked ? (
            <Ionicons name={'square-outline'} size={24} color={'black'} />
          ) : (
            <Ionicons name={'checkbox-outline'} size={24} color={'black'} />
          )}
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
      {errors && <Text style={styles.errors}>{errors}</Text>}
    </View>
  );
}
