import * as k from './styles'
import React, { useEffect, useState } from 'react';

const Contact = () => {
  return (
  
      <k.Container>
           		<header>MINIMALISTIC FORM</header>

<form id="form" className="topBefore">
		
<input id="name" type="text" placeholder="NAME"/>
<input id="email" type="text" placeholder="E-MAIL"/>
<textarea id="message" placeholder="MESSAGE"></textarea>
<input id="submit" type="submit" value="GO!"/>
  
</form>
        </k.Container>
    
  );
};

export default Contact;