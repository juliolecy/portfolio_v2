import { useEffect, useState } from 'react'
import Fetch from '../../helpers/Fetch'
import { Projects } from '../../utils/data';
import * as k from './styles'
import { useParams } from 'react-router-dom';
const Edit: React.FC = () => {
  const [projects, setProjects] = useState<Projects[]>([]);
  const { title } = useParams();

  return (
    <k.Container>
{title}

    </k.Container>
  
  )
}

export default Edit;