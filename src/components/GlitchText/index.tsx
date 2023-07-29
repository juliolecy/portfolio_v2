import * as k from './styles'
import React, { AriaAttributes, DOMAttributes, useEffect, useState } from 'react';

const GlitchText: React.FC = () => {

  return (
    <>

<k.Container>
      <div className="text">
        <div className="upperText">
          <span>Olá, meu nome é </span>
          <span className="name">Julio Cesar</span>
          <span>Eu sou</span>
        </div>
        <h1 className="glitch" data-text="DESENVOLVEDOR">DESENVOLVEDOR</h1>
      </div>
</k.Container>
    </>
  );
};

export default GlitchText;