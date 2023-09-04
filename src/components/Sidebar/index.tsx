import * as k from './styles';
import { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { DiGithub } from 'react-icons/di';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import handleScrollListener from '../../helpers/ScrollListener';
import Toggle from '../Toggle';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    handleScrollListener(setScrolled);
  }, []);

  return (
    <>
      <k.Logo scrolled={scrolled}>JLins</k.Logo>

      <k.MenuButton id="top" scrolled={scrolled} onClick={handleToggleSidebar}>
        <h2>Menu</h2>
        <AiOutlineMenu />
      </k.MenuButton>

      <k.SidebarContainer isOpen={isOpen}>
        <k.SidebarToggle onClick={handleToggleSidebar}>
          <AiOutlineMenu />
        </k.SidebarToggle>

        <k.Content>
          <ul>
            <li>
              <ScrollLink
                to="start"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                onClick={() => setIsOpen(!isOpen)}
              >
                Início
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                onClick={() => setIsOpen(!isOpen)}
              >
                Projetos
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="skills"
                spy={true}
                smooth={true}
                duration={500}
                activeClass="active"
                onClick={() => setIsOpen(!isOpen)}
              >
                Skills
              </ScrollLink>
            </li>
          </ul>

          <Toggle />
        </k.Content>

        <k.SidebarFooter>
          <Link to="/admin">
            <span>
              <button onClick={() => setIsOpen(!isOpen)}>Entrar como administrador?</button>
            </span>
          </Link>
          <div className="line" />
          <div className="SocialMedia">
            <a target="_blank" href="https://github.com/juliolecy/" rel="noreferrer">
              <DiGithub />
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/jlins/" rel="noreferrer">
              <TiSocialLinkedinCircular />
            </a>
          </div>
        </k.SidebarFooter>
      </k.SidebarContainer>
    </>
  );
};

export default Sidebar;
