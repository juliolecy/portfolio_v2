import { useEffect, useState } from 'react'
import Fetch from '../../helpers/Fetch'
import { Projects } from '../../utils/data';
import * as k from './styles'
import { Link } from 'react-router-dom';
const Admin: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([]);

  useEffect( ()=>{
    const fetchData = async ()=>{
    const data = await Fetch.getProjects()
    console.log(data)
    setProjects(data)
  }
  fetchData()
}, [])

  return (
    <k.Container>

      <div className="welcome">
        <span>Olá, Julio Cesar</span>
        <span>Seja bem vindo</span>
      </div>

      <h1>Estes são os seus projetos</h1>

     <div className="projects">
      {projects.map((item, index)=>
      <div 
      className='projects--card'
      key={index}>
        <h1>{item.title}</h1>
        <div className='image'>
          <img src={item.img}/>
        </div>
        <Link to={`/projeto/${item.title}`}>Editar</Link>
      </div>
      )}
     </div>
    </k.Container>
  
  )
}

export default Admin;