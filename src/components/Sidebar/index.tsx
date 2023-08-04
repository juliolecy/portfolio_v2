import * as k from './styles'
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp, AiOutlineMenu } from 'react-icons/ai';
import handleScrollListener from '../../helpers/ScrollListener';
import Toggle from '../Toggle';

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(()=>{
    handleScrollListener(20, setScrolled)
  },[]);

  return (
    <>
    <k.Logo scrolled={scrolled}>JLins</k.Logo>

<k.MenuButton 
  id='top' 
  scrolled={scrolled}
  onClick={handleToggleSidebar}> 
   <AiOutlineMenu/>
   <h2>Menu</h2>
</k.MenuButton>

<k.SidebarContainer isOpen={isOpen}>
  <k.SidebarToggle onClick={handleToggleSidebar}>
    <AiOutlineMenu />
  </k.SidebarToggle>

    <k.Content>
      <ul>
        <li>Início</li>
        <li>Projetos</li>
        <li>Skills</li>
        <li>Contato</li>
      </ul>
    </k.Content>

  <k.SidebarFooter>
    <div className="line"></div>
    <div className="SocialMedia">
      <AiOutlineArrowUp/>
      <AiOutlineArrowUp/>
    </div>
    <Toggle/>
  </k.SidebarFooter>
</k.SidebarContainer>
    </>
  );
};

export default Sidebar;