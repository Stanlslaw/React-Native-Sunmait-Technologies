import React, {useState} from 'react';
import {ActivityIndicator, Button, Text, TextInput, View} from 'react-native';

import {useAddDeviceMutation} from '../../sevices/devices.ts';

import styles from './styles.ts';
export default function PostScreen(): React.JSX.Element {
  const [addDevice, result] = useAddDeviceMutation();
  const [name, setName] = useState<string>('');
  const [year, setYear] = useState<string>('');
  console.log(result);
  const handleAddDevice = () => {
    addDevice({name, data: {year: year}});
  };
  return (
    <View>
      {result.isLoading && <ActivityIndicator size={'large'} />}
      {result.error && <Text>{result.error.toString()}</Text>}
      <TextInput
        placeholder={'Input new name'}
        onChangeText={setName}
        value={name}
      />
      <TextInput
        placeholder={'Input year'}
        onChangeText={setYear}
        value={year}
        keyboardType={'number-pad'}
      />
      <Button title={'Post'} onPress={handleAddDevice} />
    </View>
  );
}
