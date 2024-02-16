import React from 'react';
import {FlatList, Text, View} from 'react-native';

import ListItem from '../ListItem';

export default function List({data, navigation}) {
  const renderItem = ({item}) => {
    return (
      <ListItem
        item={item}
        onPress={data => {
          navigation.navigate('item', data);
        }}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
}
