import React from 'react';
import {ActivityIndicator, Button, Text, View} from 'react-native';

import {useGetDevicesQuery} from '../../sevices/devices.ts';

import styles from './styles.ts';
export default function PostScreen(): React.JSX.Element {
  const {data, error, isLoading, refetch} = useGetDevicesQuery(null);
  const handleRefresh = () => {
    refetch();
  };
  return (
    <View>
      {isLoading ? (
        <ActivityIndicator size={'large'} />
      ) : data ? (
        data.map((item, key) => {
          return (
            <View key={key}>
              <Text>{JSON.stringify(item)}</Text>
            </View>
          );
        })
      ) : (
        <Text>No Data</Text>
      )}
      <View>{error && <Text>{error.toString()}</Text>}</View>
      <Button title={'Refresh'} onPress={handleRefresh} />
    </View>
  );
}
