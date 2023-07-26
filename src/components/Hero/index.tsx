import * as k from './styles'
import AOS from 'aos';
import 'aos/dist/aos.css'
import {useEffect} from 'react'

export default function Hero() {
  
      useEffect(()=>{
        AOS.init()
    },[])
 
  return (
   <k.Container>

    <div className="shadow"></div>
   </k.Container>
  )
}