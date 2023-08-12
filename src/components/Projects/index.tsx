import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import Slider from '../Slider';
import * as k from './styles'
import GlitchText from '../GlitchText';
import { ProjectsArray } from '../../utils/data';
import ProjectsCard from '../ProjectsCard';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'

const Projects = () => {

  return (

    <k.Container>
      <div className="shadow"></div>

      <div className='principal'>

        <GlitchText text='Projetos'/>
        <h2>Conheça alguns dos meus projetos</h2>
        <div className="line"></div>



        {ProjectsArray.map((item, index) =>
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