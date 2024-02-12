import {useTheme} from '@react-navigation/native';
import React, {useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

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
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      {label && (
        <Text style={StyleSheet.compose(styles.label, {color: colors.text})}>
          {label}
        </Text>
      )}
      <TextInput
        ref={refer}
        name={name}
        placeholder={placeholder}
        value={value}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        blurOnSubmit={false}
        onSubmitEditing={handleSubmitEditing}
        style={StyleSheet.compose(styles.inputContainer, {
          color: colors.text,
          borderBottomColor: colors.text,
        })}
        keyboardType={keyboardType}
        placeholderTextColor={'grey'}
      />
      {errors && touched && <Text style={styles.errors}>{errors}</Text>}
    </View>
  );
}
