import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import Slider from '../Slider';
import * as k from './styles'
import GlitchText from '../GlitchText';
import { ProjectsArray } from '../../utils/data';
import ProjectsCard from '../ProjectsCard';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Loading from '../Loading';

interface Project {
desc: string;
id: number;
img: string;
tech: string[];
title: string;
git:string;
deploy: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);

    useEffect(()=>{
      const getProjects = async () => {
        try {
          const response = await fetch('https://portfolio-v2-backend-rcw0.onrender.com/api/projects');
          const data = await response.json();
          setProjects(data.projects)
        } catch (error) {
          console.error('Erro ao buscar dados da API:', error);
        }
      };
  
      getProjects();
    }, [])

  return (

    <k.Container className='projects' > 
      <div className="shadow"></div>

      <div  className='principal'>

        <GlitchText  text='Projetos'/>
        <h2>Conheça alguns dos meus projetos</h2>
        <div className="line"></div>
      {projects.length === 0 &&
      <Loading/>
      }


        {projects.length > 0 && projects.map((item, index) =>
         (
          <ProjectsCard
            reverse={index}
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
            tech={item.tech}
            deploy={item.deploy}
            git={item.git}
          />
        )

        )}


      </div>

    </k.Container>
  );
};

export default Projects;