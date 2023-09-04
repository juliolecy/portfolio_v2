import * as k from './styles';
import GlitchText from '../GlitchText';
import ProjectsCard from '../ProjectsCard';
import { useEffect, useState } from 'react';
import Loading from '../Loading';
import Fetch from '../../helpers/Fetch';

interface Project {
  desc: string;
  id: number;
  img: string;
  tech: string[];
  title: string;
  git: string;
  deploy: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await Fetch.getProjects();
      setProjects(data);
    };
    fetchData();
  }, []);

  return (
    <k.Container className="projects">
      <div className="shadow"></div>

      <div className="principal">
        <GlitchText text="Projetos" />
        <h2>Conheça alguns dos meus projetos</h2>
        <div className="line"></div>
        {projects.length === 0 && <Loading />}

        {projects.length > 0 &&
          projects.map((item, index) => (
            <ProjectsCard
              reverse={index}
              key={index}
              title={item.title}
              desc={item.desc}
              img={item.img}
              tech={item.tech}
              deploy={item.deploy}
              git={item.git}
              id={item.id}
            />
          ))}
      </div>
    </k.Container>
  );
};

export default Projects;
