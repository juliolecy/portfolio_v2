import styled from 'styled-components';

interface SidebarContainerProps  {
    isOpen: boolean;
}

interface HeaderProps {
  scrolled: boolean;
}

export const MenuButton = styled.div<HeaderProps>`
background-color: ${({scrolled}) => (scrolled  ? '#000000ad' : 'transparent')};
position: fixed;
top: 0;
right: 0;
display: flex;
align-items: center;
gap: 0.6rem;
transition: .4s all ease;
z-index: 1;
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
  background-color: #333;
  padding: 20px;
  transition: right 0.3s ease-in-out;
  z-index: 1;

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
