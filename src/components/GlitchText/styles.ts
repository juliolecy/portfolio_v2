import styled, { keyframes } from 'styled-components';

import { stackAnimation, glitchAnimation, GlitchAnim2, GlitchAnim, GlitchSkew } from '../../styles/keyframes';

interface StackContainerProps {
  stacks: number;
}

interface StackSpanProps extends StackContainerProps {
  index: number;
}

export const Container = styled.div`
height: 100vh;
width: 100%;
margin: 0;
padding: 0;
position: relative;
z-index: 1;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-size: cover;
background-position: center;

.text {
  text-align: center;
  gap: 1rem;

.upperText{
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}
.name {
  color: #ff4a54;
  letter-spacing: 1.3rem;
  font-size: 2.3rem;
}

.glitch {
  position: relative;
  color: #fff;
  font-size: 4rem;
  letter-spacing: 0.5em;
  animation: ${GlitchSkew} 1s infinite linear alternate-reverse;
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -2px 0 #ff4a54;
  clip: rect(44px, 450px, 56px, 0);
  animation: ${GlitchAnim} 5s infinite linear alternate-reverse;
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: -2px 0 #ff4a54, 2px 2px #ff4a54;
  clip: rect(44px, 450px, 56px, 0);
  animation: ${GlitchAnim2} 5s infinite linear alternate-reverse;
}
}

@media screen and (max-width:700px){
  .text{
  .glitch {
    font-size: 3rem;
}
  }
}

@media screen and (max-width:570px){
  .text{
  .glitch {
  font-size: 2.5rem;
  }
}
}

@media screen and (max-width:460px){
  .text{
  .glitch {
  font-size: 2rem;
  }
}
}

@media screen and (max-width:400px){
  .text{
    .name{
      font-size: 1.6rem;
    }
  .glitch {
  font-size: 1.7rem;
  }
}
}
`

