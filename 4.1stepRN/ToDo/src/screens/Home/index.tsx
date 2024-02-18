import React, {useState} from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import Guid from 'react-native-uuid';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import ToDoComponent from '../../components/ToDo/index.tsx';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import type {ToDo} from '../../types';
import {RootStackParamList} from '../../types/routes.ts';

import {addTodo, selectToDo} from './slices/ToDoSlice.ts';
import styles from './styles.js';

type NavProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({
  navigation,
  route,
}: NavProps): React.JSX.Element {
  const items: ToDo[] = useAppSelector(selectToDo);
  const dispatcher = useAppDispatch();
  const [text, setText] = useState<string>('');
  const handleTextChange = (value: string) => {
    setText(value);
  };
  const handleAddToDo = () => {
    dispatcher(addTodo({id: Guid.v4().toString(), text: text, state: false}));
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TextInput
          placeholder={'Type your todo here'}
          maxLength={64}
          style={styles.textInput}
          onChangeText={handleTextChange}
        />
        <Button
          title={'Add ToDo'}
          color={'green'}
          disabled={!text}
          onPress={handleAddToDo}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.header}>Your ToDo:</Text>
      </View>
      <FlatList
        data={items}
        renderItem={({item}) => <ToDoComponent item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
