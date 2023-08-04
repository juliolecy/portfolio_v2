import * as k from './styles'

import About from "../../components/About";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import ScrollUp from '../../components/ScrollUp';
import Contact from '../../components/Contact';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';


const Home: React.FC = ()=>{
  
    return (
        <k.Layout>
        <Sidebar />
        <Hero/>
        <About/>
        <ScrollUp/>
      </k.Layout>
    )
}

export default Home;