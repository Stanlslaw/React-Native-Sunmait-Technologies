import React, {useEffect, useState} from 'react';
import {Appearance, StyleSheet, Switch, Text, View} from 'react-native';

import PropertyEditor from '../../components/PropertyEditor';
import styles from './styles';
export default function SettingsScreen({navigation}) {
  const [themeType, setThemeType] = useState(
    Appearance.getColorScheme() === 'dark' ? true : false,
  );
  useEffect(() => {
    Appearance.setColorScheme(themeType ? 'dark' : 'light');
  }, [themeType]);
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
          <PropertyEditor.Group title={'APPEARENCE'}>
            <PropertyEditor.Property
              label={'Dark Theme'}
              control={
                <Switch
                  value={themeType}
                  onValueChange={val => setThemeType(val)}
                />
              }
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
