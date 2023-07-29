import styled, { keyframes } from 'styled-components'
import HomeBackground from '../../assets/backgroundHome.jpg'
import { Morph } from '../../styles/keyframes'

export const Container = styled.div`
position: relative;
color: #fff;
width: 100%;
height: auto;
min-height: 100vh;
display: flex;
color: #fff;
align-items: center;
justify-content: center;
flex-direction: column;

&::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100vh;  
    opacity: 1; 
    z-index: -1;
    background-position: center;
    background-size: cover;
    background-color: #1E1E1E;
    background-image: url(${HomeBackground});
    filter: brightness(0.5);
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

export const ApresentationContainer = styled.div`
display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    font-family: 'Poppins';

    span{
        font-weight: 200;
        font-size: 3rem;
    }

    h1{
    font-size: 6rem;
    text-transform: uppercase;
    letter-spacing: 3rem;
    text-align: center;
    margin-bottom: 6rem;
    }

    .SocialMedia{
        display: flex;
        gap: 2rem;

        svg{
            font-size:3rem;
        }
}

    @media screen and (max-width: 750px){
        h1{
            font-size: 5rem;
            letter-spacing: 2.5rem;
        }
    }
`

export const TextMorph = styled.div`
color: white;
position: relative;
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
margin-right: 60px;
    
    .word:nth-child(1){
        animation-delay: -10s;
    }
    
    .word:nth-child(2){
        animation-delay: -7s;
    }
    
    .word:nth-child(3){
        animation-delay: -4s;
    }
    
    .word{
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: 5px;
        text-transform: uppercase;
        position: absolute;
        left:0;
        animation: ${Morph} 4s infinite ease;

        min-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
        .thin-span{
            top: 80%;
        }
    }


`