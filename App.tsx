import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/routes/Navigation';
import FadeSxreen from './src/screens/FadeSxreen';
import {GadientProvider} from './src/context/gradienteContext';

const AppState = ({children}: any) => {
  return <GadientProvider>{children}</GadientProvider>;
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <Navigation />
      </AppState>
    </NavigationContainer>
  );
};

export default App;
