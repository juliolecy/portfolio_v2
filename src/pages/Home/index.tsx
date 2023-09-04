import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ScrollUp from '../../components/ScrollUp';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { Notify } from '../../helpers/Notify';
import Courses from '../../components/Courses';

const Home: React.FC = () => {
  useEffect(() => {
    Notify('Lembre-se de desativar o adblock');
  }, []);
  return (
    <>
      <Sidebar />
      <Hero />
      <Projects />
      <Skills />
      <Courses />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Home;
