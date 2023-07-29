import * as k from './styles'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react'
import GlitchText from '../GlitchText';
import { DiGithub } from 'react-icons/di'
import { TiSocialLinkedinCircular } from 'react-icons/ti'
export default function Hero() {
  
      useEffect(()=>{
        AOS.init()
    },[])
 
  return (
   <k.Container>
    {/* <k.ApresentationContainer>
      <span>Olá, meu nome é</span>
      <h1>Julio Cesar</h1>

      <div className="SocialMedia">
      <a href="#">
    <TiSocialLinkedinCircular/>
      </a>
      <a href="#">
    <DiGithub/>
      </a>
      </div>
    </k.ApresentationContainer> */}
    
    {/* <k.TextMorph>
                <div className="word thin-span">Eu sou</div>
                <div className="word thin-span">Olá, meu nome é</div>
            </k.TextMorph> 
            <k.TextMorph>
                <div className="word">Desenvolvedor</div>
                <div className="word">Julio Cesar</div>
            </k.TextMorph> */}

            <GlitchText/>
  
    <div className="shadow"></div>
   </k.Container>
  )
}