import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import ScrollUp from '../../components/ScrollUp';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Footer from "../../components/Footer";
import { toast } from "react-toastify";
import { useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css'
import { Notify } from "../../helpers/Notify";


const Home: React.FC = () => {

useEffect(()=>{
Notify('Lembre-se de desativar o adblock')
}, [])
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