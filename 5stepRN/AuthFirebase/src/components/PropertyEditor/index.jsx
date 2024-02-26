import {useTheme} from '@react-navigation/native';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';

import styles from './style';
function PropertyEditor({children}) {
  return <View style={styles.container}>{children}</View>;
}

function Group({children, title}) {
  const windowWindth = useWindowDimensions().width;
  return (
    <View>
      <Text style={styles.groupTitle}>{title}</Text>
      <View style={styles.groupContainer}>
        {!children.length
          ? children
          : children.map((child, index) => {
              if (index === children.length - 1) {
                return child; // Return the last child as is
              } else {
                return [
                  child,
                  <View key={index} style={{alignItems: 'center'}}>
                    <View
                      style={{
                        width: windowWindth * 0.94,
                        height: 1,
                        backgroundColor: 'grey',
                      }}
                    />
                  </View>,
                ];
              }
            })}
      </View>
    </View>
  );
}

function Property({label, control}) {
  const {colors} = useTheme();
  return (
    <View
      style={StyleSheet.compose(styles.propertyContainer, {
        backgroundColor: colors.card,
      })}>
      <Text
        style={StyleSheet.compose(styles.propertyLabel, {color: colors.text})}>
        {label}
      </Text>
      <View>{control}</View>
    </View>
  );
}
function Button({title, titleColor, onPress}) {
  const {colors} = useTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={StyleSheet.compose(styles.buttonContainer, {
        backgroundColor: colors.card,
      })}>
      <Text style={{color: titleColor, fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
}
PropertyEditor.Group = Group;
PropertyEditor.Property = Property;
PropertyEditor.Button = Button;
export default PropertyEditor;
