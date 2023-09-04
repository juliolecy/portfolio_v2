import Hero from '../../components/Hero';
import Sidebar from '../../components/Sidebar';
import ScrollUp from '../../components/ScrollUp';
import Skills from '../../components/Skills';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import { useEffect } from 'react';
import { Notify } from '../../helpers/Notify';
import Certificates from '../../components/Certificates';

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
      <Certificates />
      <Footer />
      <ScrollUp />
    </>
  );
};

export default Home;
