import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

function CheckBox({
  onPress,
  isChecked,
  title,
}: CheckBoxProps): React.JSX.Element {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress}>
        {isChecked ? (
          <Image
            style={styles.image}
            source={require('../../assets/images/approved.png')}
          />
        ) : (
          <Image
            style={styles.image}
            source={require('../../assets/images/unchecked.png')}
          />
        )}
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
export default CheckBox;
export type CheckBoxProps = {
  isChecked: boolean;
  title: React.JSX.Element;
  onPress: any;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 5,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 14,
    color: '#000',
    marginLeft: 5,
  },
  image: {
    width: 24,
    height: 24,
  },
});
