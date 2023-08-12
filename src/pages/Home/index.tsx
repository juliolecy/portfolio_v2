import * as k from './styles'

import Projects from "../../components/Projects";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import ScrollUp from '../../components/ScrollUp';
import Contact from '../../components/Contact';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Slider from '../../components/Slider';
import Skills from '../../components/Skills';
import Portfolio from '../../components/Portfolio';


const Home: React.FC = ()=>{

  const images = [
    'https://via.placeholder.com/800x400/ff0000/ffffff',
    'https://via.placeholder.com/800x400/00ff00/ffffff',
    'https://via.placeholder.com/800x400/0000ff/ffffff',
  ];
  
    return (
        <k.Layout>
        <Sidebar />
        <Hero/>
        <Portfolio/>
        {/* /*<Projects/> */}
       <Skills/>
       
        <ScrollUp/>
      </k.Layout>
    )
}

export default Home;