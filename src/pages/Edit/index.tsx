import { FormEventHandler, useEffect, useState } from 'react'
import Fetch from '../../helpers/Fetch'
import * as k from './styles'
import { useParams } from 'react-router-dom';
import { Project} from '../../types/types';

const Edit: React.FC = () => {

  const { id } = useParams();

  const [loading, setLoading] = useState(false)
  const [project, setProject] = useState<Project | null>(null);
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [git, setGit] = useState<string>('')
  const [deploy, setDeploy] = useState<string>('')
  const [img, setImg] = useState<string>('')
  const [tech, setTech] = useState<string[]>([])

  useEffect( ()=>{
    const fetchData = async ()=>{
      if(id){
        const data = await Fetch.getProject(id)
          setProject(data)
          setTitle(data.title)
          setDesc(data.desc)
          setImg(data.img)
          setGit(data.git)
          setTech(data.tech)
          setDeploy(data.deploy)
      }
  } 
  fetchData()
}, [])



const handleSubmit = async (e: React.FormEvent)=>{
e.preventDefault()
 if(project){
  project.title=title
  project.desc=desc
  project.git=git
  project.deploy=deploy
  project.img=img
  project.tech=tech

  const data = await Fetch.editProject(project)
  console.log(data)
 }

}

  return ( 
<k.Container>
{!project && <h1>Loading</h1>}

{project &&
       <>
           <form onSubmit={handleSubmit}>
      <div className="title">Edição</div>
      <div className="subtitle">Edite seu projeto</div>

      <div className="input-container ic1">
        <input 
        id="title" 
        className="input" 
        type="text" 
        placeholder=" " 
        value={title} 
        onChange={(e)=>setTitle(e.target.value)}/>
        <div className="cut"></div>
        <label htmlFor="title" className="placeholder">Título</label>
      </div>

      <div className="image-container">
      <img src={`https://portfolio-v2-backend-rcw0.onrender.com/media/projects/${project.img}`} alt=""/>
      </div>

      <div className="input-container ic2">
        <input 
        id="desc" 
        className="input" 
        type="text" 
        placeholder=" " 
        value={desc} 
        onChange={(e)=>setDesc(e.target.value)}/>
        <div className="cut"></div>
        <label htmlFor="desc" className="placeholder">Descrição</label>
      </div>

      <div className="input-container ic2">
        <input id="git" 
        className="input" type="text" placeholder=" " 
        value={git} 
         onChange={(e)=>setGit(e.target.value)}/>
        <div className="cut"></div>
        <label htmlFor="git" className="placeholder">Repositório</label>
      </div>

      <div className="input-container ic2">
        <input 
        id="deploy" 
        className="input" 
        type="text" placeholder=" " 
        value={deploy} 
         onChange={(e)=>setDeploy(e.target.value)}/>
        <div className="cut"></div>
        <label htmlFor="deploy" className="placeholder">Deploy</label>
      </div>

      <div className="input-container ic2">
        <input 
        id="lastname" 
        className="input" 
        type="text" 
        placeholder=" " 
        value={tech} 
         onChange={(e)=>setTech(e.target.value)}/>
        <div className="cut"></div>
        <label htmlFor="lastname" className="placeholder">Tecnologias</label>
      </div>

      <button className="submit">Terminei</button>
    </form>
       </>
}
        

    </k.Container>
  
  )
}


export default Edit;