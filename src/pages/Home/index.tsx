import * as k from './styles'

import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import ScrollUp from '../../components/ScrollUp';
import Skills from '../../components/Skills';
import Portfolio from '../../components/Portfolio';


const Home: React.FC = () => {


  return (
    <k.Layout>
      <Sidebar />
      <Hero />
      <Portfolio />
      <Skills />
      <ScrollUp />
    </k.Layout>
  )
}

export default Home;