import { useEffect, useRef, useState } from 'react'
import Fetch from '../../helpers/Fetch'
import { Project } from '../../types/types';  
import * as k from './styles'
import { Link } from 'react-router-dom';
import { BsFillCloudPlusFill } from 'react-icons/bs';
import { useSpring } from 'react-spring';
import Cookies from 'js-cookie';
import ProjectsCardAdmin from '../../components/ProjectsCardAdmin';

const Admin: React.FC = () => {

  const jwtToken = Cookies.get('jwtToken');
  const fileField = useRef<HTMLInputElement>(null);

  const [projects, setProjects] = useState<Project[]>([]);
  const [modal, setModal] = useState(false)
  const [title, setTitle] = useState('')
  const [tech, setTech] = useState('')
  const [desc, setDesc] = useState('')
  const [deploy, setDeploy] = useState('')
  const [git, setGit] = useState('')
  const [img, setImg] = useState<File | null>(null)



  useEffect( ()=>{
    const fetchData = async ()=>{
    const data = await Fetch.getProjects()
    setProjects(data)
  }
  fetchData()
}, [])

const modalAnimation = useSpring({
  opacity: modal ? 1 : 0,
  transform: modal ? 'translateY(0)' : 'translateY(-100%)',
});

const handleModal = () => {
  setModal(!modal);
};

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const imageFile = e.target.files?.[0];
    setImg(imageFile || null)
  
};


const handleSubmit = async (e: React.FormEvent)=>{
  e.preventDefault()
  const formData = new FormData();
  if (title && desc && img && desc && git && deploy && tech) {
    formData.append('title', title)
    formData.append('desc', desc)
    formData.append('git', git)
    formData.append('deploy', deploy)
    formData.append('tech', tech)
    formData.append('img', img);
    const data = await Fetch.addProject(formData);
  }

}


  return (
    <>
    <k.Container>

      <div className="welcome">
        <span>Olá, Julio Cesar</span>
        <span>Seja bem vindo</span>
      </div>

      <k.AddProject>
     

<div className="frame">
  <div className="lines"></div>
  <div className="angles"></div>
  <article>
  <button  onClick={()=>setModal(!modal)}>

          <BsFillCloudPlusFill/>
        </button>
  </article>
</div>
      </k.AddProject>

      <h1>Seus projetos</h1>

      <div className="line"></div>
{/* 
     <div className="projects">
      {projects.map((item, index)=>
      <div 
      className='projects--card'
      key={index}>
        <h1>{item.title}</h1>
        <div className='image'>
          <img src={item.img}/>
        </div>
        <Link to={`/projeto/${item.id}`}>Editar</Link>
      </div>
      )}
     </div> */}

     <div className='projects'>
      {projects.map((item, index)=>
      <ProjectsCardAdmin
        key={index}
        title={item.title}
        img={item.img}
        desc={item.desc}
        deploy={item.deploy}
        tech={item.tech}
        git={item.git}
        id={item.id}
        />
)}
     </div>

     
    </k.Container>
 
    {modal && (
      <k.ModalContainer >
        <k.ModalContent style={modalAnimation}>
          <form onSubmit={handleSubmit}>
            <span>Adicione um novo projeto</span>
     

      <div className="input-container ic1">
        <input 
        id="title" 
        className="input" 
        type="text" 
        placeholder=" " 
        value={title} 
        onChange={(e)=>setTitle(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="title" className="placeholder">Título</label>
      </div>

      <div className="input-container ic1">
      
        <input
        id="image" 
        className="input" 
        type="file"
        required
        accept="image/*"
        onChange={handleImageChange}/>
        
        <div className="cut"></div>
        <label htmlFor="image" className="placeholder">Imagem</label>
      </div>


      <div className="input-container ic2">
        <input 
        id="desc" 
        className="input" 
        type="text" 
        placeholder=" " 
        value={desc} 
        onChange={(e)=>setDesc(e.target.value)}
        />
        <div className="cut"></div>
        <label htmlFor="desc" className="placeholder">Descrição</label>
      </div>

      <div className="input-container ic2">
        <input id="git" 
        className="input" type="text" placeholder=" " 
        value={git} 
         onChange={(e)=>setGit(e.target.value)}
         />
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

      <button 
      className="submit">Terminei</button>
    </form>
     
        </k.ModalContent>
      </k.ModalContainer>
    )}
  </>
  )

}

export default Admin;