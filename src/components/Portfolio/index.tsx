import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import Slider from '../Slider';
import * as k from './styles'
import GlitchText from '../GlitchText';
import { ProjectsArray } from '../../utils/data';
import ProjectsCard from '../ProjectsCard';

const Portfolio = () => {
  return (

    <k.Container>
      <div className="shadow"></div>

      <div className='principal'>

        <GlitchText text='Projetos'>Projetos</GlitchText>
        <h2>Conheça alguns dos meus projetos</h2>



        {ProjectsArray.map((item, index) => (
          <ProjectsCard
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

export default Portfolio;