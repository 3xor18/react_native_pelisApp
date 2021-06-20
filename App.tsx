import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/routes/Navigation';
import FadeSxreen from './src/screens/FadeSxreen';

const App = () => {
  return (
    <NavigationContainer>
      <Navigation />
      {/* <FadeSxreen /> */}
    </NavigationContainer>
  );
};

export default App;
