import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons.js';

import {useAppDispatch} from '../../redux/hooks.ts';
import {
  changeToDoStatus,
  deleteTodo,
} from '../../screens/Home/slices/ToDoSlice.ts';
import type {ToDo} from '../../types';

import styles from './styles.js';
type Props = {
  item: ToDo;
};

export default function ToDo({item}: Props): React.JSX.Element {
  const dispatcher = useAppDispatch();
  const handleDelete = () => {
    Alert.alert('Deleting...', 'Do you really want to delete this record?', [
      {
        text: 'Yes',
        onPress: () => {
          dispatcher(deleteTodo(item));
        },
      },
      {text: 'No', style: 'cancel'},
    ]);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => dispatcher(changeToDoStatus(item))}>
        <Ionicons
          name={item.state ? 'checkbox-outline' : 'square-outline'}
          size={32}
          color={'black'}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <Text
          style={[
            {textDecorationLine: item.state ? 'line-through' : 'none'},
            styles.text,
          ]}>
          {item.text}
        </Text>
      </View>
      <TouchableOpacity onPress={handleDelete}>
        <Ionicons name={'trash-outline'} size={32} color={'#e61919'} />
      </TouchableOpacity>
    </View>
  );
}
