import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {gradientContext} from '../context/gradienteContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}

const GradientBackgroud = ({children}: Props) => {
  const {colors} = useContext(gradientContext);
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        colors={[colors.primary, colors.secondary, 'white']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0.1, y: 0.1}}
        end={{x: 0.5, y: 0.7}}>
        {children}
      </LinearGradient>
    </View>
  );
};

export default GradientBackgroud;
