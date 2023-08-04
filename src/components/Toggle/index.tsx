import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';
import * as k from './styles'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Toggle: React.FC = () => {
  const {theme, toggleTheme} = useContext(ThemeContext);
  return (
    
      <k.Container>
        <div 
        className='toggle-switch'>
            <label>
                <input onChange={toggleTheme} type = 'checkbox'/>
                <span className = 'slider'></span>
            </label>
        </div>
        </k.Container>
    
  );
};

export default Toggle;