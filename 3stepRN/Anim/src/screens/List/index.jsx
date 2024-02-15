import React from 'react';
import {Text, View} from 'react-native';

import List from '../../components/List';
import styles from './styles';
const data = [
  {
    id: 1,
    title: 'Item 1',
    description: 'Description for Item 1',
    photo:
      'https://images.pexels.com/photos/3965556/pexels-photo-3965556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    title: 'Item 2',
    description: 'Description for Item 2',
    photo:
      'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  // Add more items as needed
];
export default function ListScreen() {
  return (
    <View style={styles.container}>
      <List data={data} />
    </View>
  );
}
