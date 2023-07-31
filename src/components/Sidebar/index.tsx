import * as k from './styles'
import React, { useEffect, useState } from 'react';
import { AiOutlineArrowUp, AiOutlineMenu } from 'react-icons/ai';
import { SidebarContainer, SidebarToggle } from './styles'
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

<SidebarContainer isOpen={isOpen}>
  <SidebarToggle onClick={handleToggleSidebar}>
    <AiOutlineMenu />
      </SidebarToggle>

    <div>
      hello world
    </div>

  <k.SidebarFooter>
    <div className="line"></div>
    <div className="SocialMedia">
      <AiOutlineArrowUp/>
      <AiOutlineArrowUp/>
    </div>
    <Toggle/>
  </k.SidebarFooter>
</SidebarContainer>
    </>
  );
};

export default Sidebar;