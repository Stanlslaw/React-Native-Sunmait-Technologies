import React from 'react';
import {FlatList, Text, View} from 'react-native';

export default function List({data}) {
  const renderItem = ({item}) => {
    return <Text>{item.id}</Text>;
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
