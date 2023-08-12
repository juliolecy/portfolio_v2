import styled, { keyframes } from 'styled-components'
import HomeBackground from '../../assets/backgroundHome.jpg'
import { Morph } from '../../styles/keyframes'
import { scroll } from '../../styles/keyframes'

export const SliderContainer = styled.div`
min-height:50vh ;
display: grid;
place-items:center;

.slider {
 height: 150px;
 margin:auto;
 position: relative;
 width: 90%;
 display: grid;
 place-items: center;
 overflow: hidden;

 
 &:before, &:after{
    background: linear-gradient(to right, rgb(0,0,0) 0%, rgba(255,255,255,0) 100%);
    display: ${props => props.theme.title === 'dark'? 'flex' : 'none'};
    content: '';
    height: 100%;
    position: absolute;
    width: 15%;
    z-index: 2;
};
&:before{
   left:0;
   top:0;
}

&:after{
   right:0;
   top:0;
   transform: rotateZ(180deg);
}
 .slide-track{
     display: flex;
     width: calc(150px * 18);
     animation: ${scroll} 40s linear infinite; 
 }
 .slide{
     height: 150px;
     width: 150px;
     display: flex;
     align-items: center;
     padding: 3rem;
    perspective: 100px;
    filter: grayscale(1);
    transition: transform 1s;
    
    &:hover{
        filter: grayscale(0);
        
    }
     img{
         width: 100%;
         transition: transform 1s;

         &:hover{
            transform: translateZ(10px);
         }
     }
 }
}

 .shadow{
    background: linear-gradient(0deg,#000 10%,transparent 90%);
    bottom: 0;
    position: absolute;
    width: 100%;
    height:200px;
}
@media(min-width:1024px){
  font-size: 2rem;
}

@media(max-width:460px){
    font-size: 1.3rem;

    .hero{
      margin: 0 2rem;
        div{

            img{
                max-width: 212px;
                max-height: 212px;
            }
        }
    }

}
`
