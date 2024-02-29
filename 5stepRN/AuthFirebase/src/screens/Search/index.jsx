import {useTheme} from '@react-navigation/native';
import React, {useEffect, useRef} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import FormTextInput from '../../components/FormTextInput';
import {styles} from './styles';

export default function SearchScreen({params}) {
  const {colors} = useTheme();
  const inputRef = useRef();
  useEffect(() => {
    console.log('focus', params);
    inputRef.current.focus();
  }, [params]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          ref={inputRef}
          placeholder={'search'}
          style={StyleSheet.compose(styles.inputContainer, {
            color: colors.text,
            borderBottomColor: colors.text,
          })}
        />
      </View>
    </View>
  );
}
