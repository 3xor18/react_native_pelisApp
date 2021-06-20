import {useState} from 'react';
import {createContext} from 'react';
import React from 'react';
export interface imageColors {
  primary: string;
  secondary: string;
}

interface contextProps {
  colors: imageColors;
  prevColors: imageColors;
  setMainColors: (colors: imageColors) => void;
  setPrevMainColors: (colors: imageColors) => void;
}

export const gradientContext = createContext({} as contextProps);

export const GadientProvider = ({children}: any) => {
  const [colors, setColors] = useState<imageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const [prevColors, setPrevColors] = useState<imageColors>({
    primary: 'transparent',
    secondary: 'transparent',
  });

  const setMainColors = (colors: imageColors) => {
    setColors(colors);
  };

  const setPrevMainColors = (colors: imageColors) => {
    setPrevColors(colors);
  };

  return (
    <gradientContext.Provider
      value={{colors, prevColors, setPrevMainColors, setMainColors}}>
      {children}
    </gradientContext.Provider>
  );
};
