import styled from 'styled-components';
import { animate } from '../../styles/keyframes';

interface SidebarContainerProps  {
    isOpen: boolean;
}

interface HeaderProps {
  scrolled: boolean;
}

export const Logo = styled.h1<HeaderProps>`
color: ${props=> props.theme.colors.text};
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
  font-family: 'Barlow',sans-serif;
    font-size: 2rem;
    font-weight: 500;
    transition: 1s all ease;

    &:hover{
      color: #00d5c3;
    }
}

`

export const SidebarContainer = styled.div<SidebarContainerProps>`
  position: fixed;
  top: 0;
  right: ${({isOpen}) => (isOpen ? '0' : '-300px')};
  width: 300px;
  height: 100vh;
  background-color: ${props => props.theme.colors.primary};
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
  color:${props=> props.theme.colors.text};
  font-size: 24px;
  cursor: pointer;
`;


export const Content = styled.div`
font-family: 'Montserrat';
display: flex;
flex-direction: column;
color: ${props => props.theme.colors.text};
margin: 0 auto;
ul{
  list-style: none;
  text-align: center;
  margin-bottom: 4rem;
  li{
    font-size: 2.5rem;
    margin-bottom: 1rem;
    transition: .5s all ease;

    &:hover{
      cursor: pointer;
    color: #969696;
    }
  }
}
`

export const SidebarFooter = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;

.SocialMedia{
  font-size: 3.5rem;
    display: flex;
    gap: 4rem;
  svg{
    color: ${props=> props.theme.colors.text};
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