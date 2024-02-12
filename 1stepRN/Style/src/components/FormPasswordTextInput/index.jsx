import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
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
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={StyleSheet.compose(styles.label, {color: colors.text})}>
        {label}
      </Text>
      <View>
        <TextInput
          ref={refer}
          name={name}
          placeholder={placeholder}
          value={value}
          onChangeText={handleChange(name)}
          onBlur={handleBlur(name)}
          secureTextEntry={!isShow}
          style={StyleSheet.compose(styles.inputContainer, {
            color: colors.text,
            borderBottomColor: colors.text,
          })}
          placeholderTextColor={'grey'}
        />
        <TouchableOpacity
          style={styles.eyeIconContainer}
          onPress={() => setIsShow(!isShow)}>
          <Ionicons
            name={isShow ? 'eye-outline' : 'eye-off-outline'}
            size={24}
            color={colors.text}
          />
        </TouchableOpacity>
      </View>

      {errors && touched && <Text style={styles.errors}>{errors}</Text>}
    </View>
  );
}
