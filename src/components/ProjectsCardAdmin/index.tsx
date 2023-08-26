import * as k from './styles'
import { Project } from '../../types/types'
import { Link } from 'react-router-dom'
import { AiFillGithub } from 'react-icons/ai'
import { GrDeploy } from 'react-icons/gr'


const ProjectsCardAdmin = (props: Project) => {
    console.log(props.tech)
    return (
<k.ProjectsContainer>
    <ul>
        <li className="booking-card" style={{ backgroundImage: `url(${props.img})` }}>
            <div className="book-container">
                <div className="content">
                    <button className="btn">
                        <Link to={`/projeto/${props.id}`}>Editar</Link>
                    </button>
                </div>
            </div>

            <div className="informations-container">
                <h2 className="title">{props.title}</h2>
                <p className="sub-title">
                    {props.desc}
                </p>

                <div className="more-information">
                    <div className="info-and-date-container">
                        <div className="tech info">
                            {props.tech.map((item, index)=>
                            <p key={index}>{item}</p>
                            )}
                        </div>
                        <div className="socialmedia--container">
                                <Link to={props.git}><AiFillGithub/></Link>

                                <Link to={props.deploy}><GrDeploy/></Link>
                           
                        </div>
                    </div>
                    {/* <p className="disclaimer">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi eveniet perferendis culpa. Expedita architecto nesciunt, rem distinctio</p> */}
                </div>

            </div>
        </li>
    </ul>

</k.ProjectsContainer>

    )
}

export default ProjectsCardAdmin