import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import * as k from './styles'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import ReactSwitch from 'react-switch';
import {MdOutlineDarkMode} from 'react-icons/md'
import {FaRegSun} from 'react-icons/fa'

const Toggle: React.FC = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    
      <k.Container>
      <MdOutlineDarkMode/>

        <ReactSwitch 
        onChange={toggleTheme}
        checked={theme.title === 'dark'? true : false}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor='#b90000'
        onColor='#fff'>
        </ReactSwitch>

        <FaRegSun/>
        </k.Container>
    
  );
};

export default Toggle;