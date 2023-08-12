import * as k from './styles'
import React, { useEffect, useState } from 'react';
import {GoDot, GoDotFill} from 'react-icons/go'
const Accordion = () => {
  return (
  
      <k.Container>

      <div className="accordion">
        <k.AccordionItem id="question1">
          <a className="accordion-link" href="#question1">
            <div className="flex">
              <h3>Frontend</h3>
              <ul>
                <li>#React</li>
                <li>#NextJs</li>
                <li>#Javascript</li>
              </ul>
            </div>
            <i className="icon ion-md-arrow-forward"><GoDot/></i>
            <i className="icon ion-md-arrow-down"><GoDotFill/></i>
          </a>
          <div className="answer">
            <p> HTML CSS JAVASCRIPT REACT NEXTJS</p>
          </div>
          <hr/>
      </k.AccordionItem>
        <k.AccordionItem id="question2">
          <a className="accordion-link" href="#question2">
            <div className="flex">
              <h3>Backend</h3>
              <ul>
                <li>#Node</li>
                <li>#Python</li>
                <li>#Javascript</li>
              </ul>
            </div>
            <i className="icon ion-md-arrow-forward"><GoDot/></i>
            <i className="icon ion-md-arrow-down"><GoDotFill/></i>
          </a>
          <div className="answer">
            <p>JAVASCRIPT NODE EXPRESS SEQUELIZE</p>
          </div>
          <hr/>
      </k.AccordionItem>
        <k.AccordionItem id="question3">
          <a className="accordion-link" href="#question3">
            <div className="flex">
              <h3>Outros conhecimentos</h3>
              <ul>
                <li>#Typescript</li>
                <li>SQL</li>
              </ul>
            </div>
            <i className="icon ion-md-arrow-forward"><GoDot/></i>
            <i className="icon ion-md-arrow-down"><GoDotFill/></i>
          </a>
          <div className="answer">
            <p>LTYPESCRIPT SQL MONGODB POSTGRESQL MYSQL BOOTSTRAP MATERIAL UI STYLED-COMPONENTS SASS</p>
          </div>
          <hr/>
      </k.AccordionItem>

     </div>

        </k.Container>
    
  );
};

export default Accordion;