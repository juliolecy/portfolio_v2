import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import ScrollUp from '../../components/ScrollUp';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Footer from "../../components/Footer";


const Home: React.FC = () => {


  return (
    <>
      <Sidebar />
      <Hero />
      <Projects />
      <Skills />
      <Footer/>
      <ScrollUp />
    </>
  )
}

export default Home;