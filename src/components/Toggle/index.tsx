import * as k from './styles'
import React, { useEffect, useState } from 'react';

const Toggle: React.FC = () => {
  return (
    
      <k.Container>
        <div 
        className='toggle-switch'>
            <label>
                <input type = 'checkbox'/>
                <span className = 'slider'></span>
            </label>
        </div>
        </k.Container>
    
  );
};

export default Toggle;