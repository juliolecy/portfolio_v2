import * as k from './styles'
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { DiGithub } from 'react-icons/di';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import handleScrollListener from '../../helpers/ScrollListener';
import Toggle from '../Toggle';

const Sidebar = () => {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false)

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleScrollListener(20, setScrolled)
  }, []);

  return (
    <>
      <k.Logo scrolled={scrolled}>JLins</k.Logo>

      <k.MenuButton
        id='top'
        scrolled={scrolled}
        onClick={handleToggleSidebar}>
        <h2>Menu</h2>
        <AiOutlineMenu />
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

          <Toggle />

        </k.Content>

        <k.SidebarFooter>
          <div className="line"></div>
          <div className="SocialMedia">
            <DiGithub/>
            <TiSocialLinkedinCircular />
          </div>
        </k.SidebarFooter>
      </k.SidebarContainer>
    </>
  );
};

export default Sidebar;