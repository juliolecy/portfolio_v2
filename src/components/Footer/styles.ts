import styled from 'styled-components';
import { animate } from '../../styles/keyframes';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  background-color: ${props=> props.theme.colors.primary};
    justify-content: space-between;

    .line{
    height: 1px;
    background:linear-gradient(to right, transparent, #5d5d5d73, #38161600);
    border-radius: 50%;
    width: 100%;
}
`

export const Logo = styled.h1`
color: ${props=> props.theme.colors.text};
text-transform: uppercase;
font-size: 2rem;
margin: 1rem;
padding: 1rem;
text-decoration: none;
transition: 1s all ease;
background: linear-gradient(90deg, #000, #fff, #000);
background-repeat: no-repeat;
background-size: 80%;
-webkit-background-clip: text;
-webkit-text-fill-color: rgba(255,255,255,0);
animation: ${animate} 6s linear infinite;
font-family: 'Zeyada';

`
