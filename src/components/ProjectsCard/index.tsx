import * as k from './styles'
import { BiLinkExternal } from 'react-icons/bi';
import { FiGithub } from 'react-icons/fi';
import { Projects } from '../../utils/data';

const ProjectsCard = (props: Projects) => {
  return (
<k.ProjectContainer>
  <div className="image">

  <img src={props.img} alt=""  />
  </div>

  <div className="content">
    <h1>{props.title}</h1>
    <p>{props.desc}</p>

    <div className="technologies">
    {props.tech.map((i, k)=>(
    <span key={k}>{i}  </span>
    ))
    }
    </div>

    <div className="links">
      <a href={props.git}>CODE <FiGithub/> </a>
      <a href={props.deploy}>DEMO <BiLinkExternal/> </a>
    </div>

  </div>
</k.ProjectContainer>    
  );
};

export default ProjectsCard;