import * as k from './styles'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useRef, useState } from 'react'
import GlitchText from '../GlitchText';
import { DiGithub } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
import Node from '/Skills/node.png'
import skills from '../../utils/skills';


export default function Slider() {
 
  return (
    
    <k.SliderContainer>
      <div className="slider">
        <div className="slide-track">
      {
        skills.map((item, index)=>
        <div className="slide">
            <img src={item.src} alt="react icon"  />
          </div>
        )
      }         
       {
        skills.map((item, index)=>
  
        <div className="slide">
            <img src={item.src} alt="react icon"  />
          </div>
        )
      }    
          </div>

          
        </div>
      
    </k.SliderContainer>
   
  )
}