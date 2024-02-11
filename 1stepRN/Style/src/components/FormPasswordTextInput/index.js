import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './style';
export default function FormPasswordTextInput({
  name,
  value,
  label,
  placeholder,
  handleChange,
  handleBlur,
  errors,
  touched,
  refer,
}) {
  const [isShow, setIsShow] = useState(false);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          ref={refer}
          name={name}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          secureTextEntry={!isShow}
          style={styles.inputContainer}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setIsShow(!isShow)}>
          <Ionicons
            name={isShow ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color={'black'}
          />
        </TouchableOpacity>
      </View>

      {errors && touched && <Text style={styles.errors}>{errors}</Text>}
    </View>
  );
}
