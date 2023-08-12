import * as k from './styles'
import React, { AriaAttributes, DOMAttributes, useEffect, useState } from 'react';

interface GlitchText {
  text: string;
}

const GlitchText: React.FC = ({text}: GlitchText) => {

  return (
    <>

{/* <k.Container>
      <div className="text">
        <div className="upperText">
          <span>Olá, meu nome é </span>
          <span className="name">Julio Cesar</span>
          <span>Eu sou</span>
        </div>
        <h1 className="glitch" data-text="DESENVOLVEDOR">DESENVOLVEDOR</h1>
      </div>
</k.Container> */}

<k.Container>
  <h1 className="glitch" data-text={text}>{text}</h1>

</k.Container>

  

    </>
  );
};

export default GlitchText;