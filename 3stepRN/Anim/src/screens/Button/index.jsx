import React, {useState} from 'react';
import {Animated, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function ButtonScreen() {
  const [anim] = useState(new Animated.Value(0));
  const [color, setColor] = useState({
    text: 'magenta',
    back: 'white',
    border: 'magenta',
  });
  const [borderStyle, setBorderStyle] = useState('dashed');
  const [textOpacity, setTextOpacity] = useState(1);
  const rotateButton = () => {
    anim.setValue(0); // Reset the anim value before starting a new animation
    setColor({
      text: color.text === 'magenta' ? 'white' : 'magenta',
      back: color.back === 'white' ? 'blue' : 'white',
      border: color.border === 'magenta' ? 'blue' : 'magenta',
    });
    setTextOpacity(0);
    setBorderStyle(borderStyle === 'dashed' ? 'solid' : 'dashed');
    Animated.timing(anim, {
      toValue: 100,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      anim.setValue(0); // Reset the anim value after the animation completes
      setTextOpacity(1);
    });
  };

  const interpolatedRotate = anim.interpolate({
    inputRange: [0, 100],
    outputRange: ['360deg', '180deg'],
  });

  const interpolatedOpacity = anim.interpolate({
    inputRange: [0, 100],
    outputRange: ['0', '1'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {
            transform: [{rotate: interpolatedRotate}],
            opacity: interpolatedOpacity,
            backgroundColor: color.back,
            borderColor: color.border,
            borderStyle: borderStyle,
          },
        ]}
        onPress={rotateButton}>
        <Text
          style={[
            styles.buttonText,
            {
              color: color.text,
              opacity: textOpacity,
            },
          ]}>
          Click Me
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    borderColor: 'magenta',
    borderWidth: 2,
    borderStyle: 'dashed',
  },
  buttonText: {
    paddingHorizontal: 32,
    color: 'magenta',
  },
});
