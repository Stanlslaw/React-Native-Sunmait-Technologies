import React from 'react';
import {Text, View} from 'react-native';

import stub from '../../assets/images/stub.jpg';
import List from '../../components/List';
import styles from './styles';
const data = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Description for Item 1',
    photo: stub,
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Description for Item 2',
    photo: stub,
  },
  // Add more items as needed
];
export default function ListScreen({navigation}) {
  return (
    <View style={styles.container}>
      <List data={data} navigation={navigation} />
    </View>
  );
}
