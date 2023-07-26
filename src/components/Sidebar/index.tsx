import * as k from './styles'
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { SidebarContainer, SidebarToggle } from './styles'

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };


  useEffect(()=>{
    const scrollListener = ()=>{
      if(window.scrollY > 20){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', scrollListener);
    return()=>{
      window.removeEventListener('scroll', scrollListener);
    }

  },[]);

  return (
    <>

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
</SidebarContainer>
    </>
  );
};

export default Sidebar;