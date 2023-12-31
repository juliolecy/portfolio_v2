import * as k from './styles';
import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { Project } from '../../types/types';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface ProjectCard extends Project {
  tech: string[];
  reverse: number;
}

const ProjectsCard = (props: ProjectCard) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <k.ProjectContainer
      data-aos="fade-right"
      data-aos-duration="1000"
      style={{ flexDirection: props.reverse % 2 === 0 ? 'row' : 'row-reverse' }}
    >
      <div className="image">
        <img src={`data:image/png;base64,${props.img}`} alt="" />
      </div>

      <div className="content">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>

        <div className="technologies">
          {props.tech.map((i, k) => (
            <span key={k}>{i} </span>
          ))}
        </div>

        <div className="links">
          <a target="_blank" href={props.git}>
            CODE <FiGithub />{' '}
          </a>
          <a target="_blank" href={props.deploy}>
            DEMO <BiLinkExternal />{' '}
          </a>
        </div>
      </div>
    </k.ProjectContainer>
  );
};

export default ProjectsCard;
