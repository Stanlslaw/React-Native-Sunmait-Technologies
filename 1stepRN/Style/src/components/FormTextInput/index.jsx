import React, {useRef} from 'react';
import {Text, TextInput, View} from 'react-native';

import styles from './style';
export default function FormTextInput({
  name,
  value,
  label,
  placeholder,
  keyboardType = 'default',
  handleChange,
  handleBlur,
  handleSubmitEditing,
  errors,
  touched,
  refer,
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        ref={refer}
        name={name}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        blurOnSubmit={false}
        onSubmitEditing={handleSubmitEditing}
        style={styles.inputContainer}
        keyboardType={keyboardType}
        placeholderTextColor={'grey'}
      />
      {errors && touched && <Text style={styles.errors}>{errors}</Text>}
    </View>
  );
}
