import React, {useRef} from 'react';
import {View, Text, Animated} from 'react-native';

const useFade = () => {
  const opacity = useRef(new Animated.Value(0)).current;

  const fade = (value: number) => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return {opacity, fade};
};

export default useFade;
