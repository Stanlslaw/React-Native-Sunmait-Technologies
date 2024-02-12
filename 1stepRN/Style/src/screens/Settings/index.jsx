import React from 'react';
import {StyleSheet, Switch, Text, View} from 'react-native';

import PropertyEditor from '../../components/PropertyEditor';
import styles from './styles';
export default function SettingsScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <PropertyEditor>
          <PropertyEditor.Group title={'GENERAL'}>
            <PropertyEditor.Property
              label={'Allow Push Notifications'}
              control={<Switch value={true} />}
            />
            <PropertyEditor.Property
              label={'Enable Face ID / Touch ID'}
              control={<Switch value={false} />}
            />
          </PropertyEditor.Group>
          <PropertyEditor.Button
            title={'Save'}
            titleColor={'red'}
            onPress={() => navigation.navigate('profile')}
          />
        </PropertyEditor>
      </View>
    </View>
  );
}
