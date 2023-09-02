import { useEffect, useState } from 'react'
import Fetch from '../../helpers/Fetch'
import * as k from './styles'
import {  useNavigate, useParams } from 'react-router-dom';
import { Project } from '../../types/types';
import Loading from '../../components/Loading2';
import { BiArrowToLeft } from 'react-icons/bi';
import { Notify } from '../../helpers/Notify';

const Edit: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false)
  const [project, setProject] = useState<Project | null>(null);
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [git, setGit] = useState<string>('')
  const [deploy, setDeploy] = useState<string>('')
  const [tech, setTech] = useState<string>('')


  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const data = await Fetch.getProject(id)
        setProject(data)
        setTitle(data.title)
        setDesc(data.desc)
        setGit(data.git)
        setTech(data.tech)
        setDeploy(data.deploy)
      }
    }
    fetchData()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const formData = new FormData();
    if(!title){
      Notify("Insira um título.")
      return
    }
    if(!desc){
      Notify("Insira uma descrição.")
      return
    }
    if(!git){
      Notify("Insira um repositório.")
      return
    }
    if(!deploy){
      Notify("Insira um endereço.")
      return
    }
    if(!tech){
      Notify("Insira as tecnologias.")
      return
    }

    if (title && desc && desc && git && deploy && tech) {
      formData.append('title', title)
      formData.append('desc', desc)
      formData.append('git', git)
      formData.append('deploy', deploy)
      formData.append('tech', tech)
      formData.append('id', id!)
      setLoading(true)
      await Fetch.editProject(formData);
      navigate('/admin')
    }
  }

  return (
    <k.Container>
      {!project && <Loading />}
      {loading && <Loading />}

      {project &&
        <>
          <form onSubmit={handleSubmit}>
          <div className="back">
            <BiArrowToLeft />
          </div>
            <div className="title">Edição</div>
            <div className="subtitle">Edite seu projeto</div>

            <div className="input-container ic1">
              <input
                id="title"
                className="input"
                type="text"
                placeholder=" "
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
              <div className="cut"></div>
              <label htmlFor="title" className="placeholder">Título</label>
            </div>

            <div className="image-container">
              <img src={project.img} alt="" />
            </div>

            <div className="input-container ic2">
              <input
                id="desc"
                className="input"
                type="text"
                placeholder=" "
                value={desc}
                onChange={(e) => setDesc(e.target.value)} />
              <div className="cut"></div>
              <label htmlFor="desc" className="placeholder">Descrição</label>
            </div>

            <div className="input-container ic2">
              <input id="git"
                className="input" type="text" placeholder=" "
                value={git}
                onChange={(e) => setGit(e.target.value)} />
              <div className="cut"></div>
              <label htmlFor="git" className="placeholder">Repositório</label>
            </div>

            <div className="input-container ic2">
              <input
                id="deploy"
                className="input"
                type="text" placeholder=" "
                value={deploy}
                onChange={(e) => setDeploy(e.target.value)} />
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
                onChange={(e) => setTech(e.target.value)} />
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