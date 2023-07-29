import * as k from './styles'

import About from "../../components/About";
import Hero from "../../components/Hero";
import Sidebar from "../../components/Sidebar";
import ScrollUp from '../../components/ScrollUp';
import Contact from '../../components/Contact';

export default function Home(){
    return (
        <k.Layout>
        <Sidebar />
        <Hero/>
        <About/>
        <ScrollUp/>
      </k.Layout>
    )
}