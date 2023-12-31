import * as k from './styles';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import GlitchText from '../GlitchText';
import Cookies from 'js-cookie';

export default function Hero() {
  const jwtToken = Cookies.get('jwtToken');
  console.log(jwtToken);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <k.Container className="start">
      <span data-aos="zoom-out" data-aos-duration="4000">
        Olá, meu nome é
      </span>
      <span data-aos="zoom-out" data-aos-duration="2000">
        Julio Cesar
      </span>
      <span data-aos="zoom-out" data-aos-duration="1000">
        Eu sou
      </span>
      <GlitchText text="Desenvolvedor" data-aos="zoom-out" data-aos-duration="1000" />
      <svg data-aos="zoom-out" data-aos-duration="1000" className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0" />
        <path className="a2" d="M0 20 L30 52 L60 20" />
        <path className="a3" d="M0 40 L30 72 L60 40" />
      </svg>
      <div className="shadow" />
    </k.Container>
  );
}
