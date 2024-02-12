import React from 'react';
import {Text, TouchableOpacity, useWindowDimensions, View} from 'react-native';

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
        {children.map((child, index) => {
          if (index === children.length - 1) {
            return child; // Return the last child as is
          } else {
            return [
              child,
              <View style={{alignItems: 'center'}}>
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
  return (
    <View style={styles.propertyContainer}>
      <Text style={styles.propertyLabel}>{label}</Text>
      <View>{control}</View>
    </View>
  );
}
function Button({title, titleColor, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonContainer}>
      <Text style={{color: titleColor, fontSize: 16}}>{title}</Text>
    </TouchableOpacity>
  );
}
PropertyEditor.Group = Group;
PropertyEditor.Property = Property;
PropertyEditor.Button = Button;
export default PropertyEditor;
