import React, { createContext, useState} from 'react';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

  interface Props {
    children: React.ReactNode
  }

  interface ThemeContextData {
    theme: any;
    toggleTheme():void;
  }

export const ThemeContext =  createContext<ThemeContextData>({} as ThemeContextData);

export const ToggleProvider = (props: Props)=>{
const [theme, setTheme] = useState(dark);

const toggleTheme = () =>{
  setTheme(theme.title == 'dark' ? light : dark)
}

return (
    <ThemeContext.Provider
    value={{theme, toggleTheme}}
    >
    {props.children}
    </ThemeContext.Provider>
  )
}
