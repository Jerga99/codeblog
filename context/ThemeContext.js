
import { createContext } from 'react';

export const themes = {
  light: {
    type: 'light',
    fontColor: '#2b2c38',
    background: '#f4f7f9'
  },
  dark: {
    type: 'dark',
    fontColor: '#dcdcdc',
    background: '#2b2c38'
  }
}


export const ThemeContext = createContext({});
