import * as k from './styles'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
import GlitchText from '../GlitchText';
import { DiGithub } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
export default function Hero() {

  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <k.Container>
      <span>Olá, meu nome é</span>
      <span>Julio Cesar</span>
      <span>Eu sou</span>
      <GlitchText text='Desenvolvedor' />
      <div className="shadow"></div>
    </k.Container>
  )
}