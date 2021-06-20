import React from 'react';
import {useRef} from 'react';
import {View, Text, StyleSheet, Animated, Button} from 'react-native';
import useFade from '../hooks/useFade';
const FadeSxreen = () => {
  const {opacity, fade} = useFade();

  return (
    <View style={styles.viewPadre}>
      <Animated.View
        style={{
          backgroundColor: '#084F6A',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          marginBottom: 10,
          opacity,
        }}></Animated.View>
      <Button onPress={() => fade(1)} title="fadeIn" />
      <Button onPress={() => fade(0)} title="fadeOut" />
    </View>
  );
};

const styles = StyleSheet.create({
  viewPadre: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center',
  },
  view2: {
    backgroundColor: '#084F6A',
    width: 150,
    height: 150,
    borderColor: 'white',
    borderWidth: 10,
  },
});

export default FadeSxreen;
