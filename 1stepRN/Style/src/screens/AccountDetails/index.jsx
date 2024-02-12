import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import PropertyEditor from '../../components/PropertyEditor';
import styles from './styles';

export default function AccountDetailsScreen({navigation}) {
  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPressOut={handleDoneButton}>
          <Text style={{color: 'blue', fontSize: 18, fontWeight: 400}}>
            Done
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const handleDoneButton = () => {
    navigation.navigate('profile');
  };
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PropertyEditor>
          <PropertyEditor.Group title={'PUBLIC PROFILE'}>
            <PropertyEditor.Property
              label={'First Name'}
              control={<TextInput value={'John'} style={{color: 'black'}} />}
            />
            <PropertyEditor.Property
              label={'Last Name'}
              control={<TextInput value={'Smith'} style={{color: 'black'}} />}
            />
          </PropertyEditor.Group>
          <PropertyEditor.Group title={'PRIVATE DETAILS'}>
            <PropertyEditor.Property
              label={'E-mail Address'}
              control={
                <TextInput value={'w2@gmail.com'} style={{color: 'black'}} />
              }
            />
            <PropertyEditor.Property
              label={'Phone Number'}
              control={
                <TextInput
                  placeholder={'You phone number'}
                  placeholderTextColor={'grey'}
                  style={{color: 'black'}}
                />
              }
            />
          </PropertyEditor.Group>
        </PropertyEditor>
      </View>
    </View>
  );
}
