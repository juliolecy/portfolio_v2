import styled from 'styled-components';
import { animate } from '../../styles/keyframes';

interface SidebarContainerProps  {
    isOpen: boolean;
}

interface HeaderProps {
  scrolled: boolean;
}

export const Logo = styled.h1<HeaderProps>`
color: white;
position: fixed;
text-transform: uppercase;
font-size: 2rem;
margin: 2rem;
padding: 1rem;
text-decoration: none;
z-index: 9;
top: ${({scrolled}) => (scrolled  ? '-200px' : '0')};
transition: 1s all ease;
background: linear-gradient(90deg, #000, #fff, #000);
background-repeat: no-repeat;
background-size: 80%;
-webkit-background-clip: text;
-webkit-text-fill-color: rgba(255,255,255,0);
animation: ${animate} 6s linear infinite;
font-family: 'Zeyada';
`

export const MenuButton = styled.div<HeaderProps>`
background-color: ${({scrolled}) => (scrolled  ? '#000000ad' : 'transparent')};
position: fixed;
top: 0;
right: 0;
display: flex;
align-items: center;
gap: 0.6rem;
transition: .4s all ease;
z-index: 9;
color: #fff;
margin: 2rem;
padding: 1rem;

svg{
  font-size: 2rem;
}

h2{
  font-family: 'Montserrat', sans-serif;
  font-size: 1.8rem;
}
`

export const SidebarContainer = styled.div<SidebarContainerProps>`
  position: fixed;
  top: 0;
  right: ${({isOpen}) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100vh;
  background-color: #000;
  transition: right 0.3s ease-in-out;
  z-index: 10;
  display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export const SidebarToggle = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export const SidebarFooter = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

.SocialMedia{
gap: 3rem;
  svg{
    color: #fff;
  }
}

.line{
    width: 23rem;
    height: 1px;
    background-image: linear-gradient(to right, transparent, #5d5d5d, #38161600);
    border-radius: 50%;
    margin-bottom: 2rem;
}
`