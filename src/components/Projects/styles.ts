import styled from 'styled-components';
import backgroundPNG from '../../assets/lines.png'

interface Container {
  name: string;
}
export const Container = styled.div<Container>`
position: relative;
width: 100%;
height: auto;
min-height: 100vh;
display: flex;
color: #fff;
align-items: center;
flex-direction: column;
display: flex;
align-items: center;
background-color: #000;
background-color: ${props=> props.theme.colors.primary};

&::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    opacity: ${props=> props.theme.title === 'dark' ? 0.2  : 0.1 };
    background-color:  ${props=> props.theme.colors.primary};
    background-size: auto;
    background-image: url(${backgroundPNG});
    filter:${props=> props.theme.title === 'dark' ?  'brightness(0.6)' : 'none'};
    background-repeat: no-repeat;
}

.shadow{
    background: ${props=>props.theme.title ==='dark' ? 'linear-gradient(180deg,#000 10%,transparent 90%)' : 'linear-gradient(180deg,#fff 10%,transparent 90%)'};
    top: 0;
    position: absolute;
    width: 100%;
    height:200px;
}

.principal{
  z-index: 2;
  margin-top: 15rem;
  align-items: center;
    display: flex;
    flex-direction: column;
  h1{
    margin-bottom: 1rem;
  }
  h2{
    font-family: 'Montserrat';
    color: ${props=> props.theme.colors.text};
    font-weight: 200;
    font-size: 2rem;
  }
}

.line{
    height: 1px;
    background:linear-gradient(to right, transparent, #5d5d5d73, #38161600);
    border-radius: 50%;
    width: 100%;
    margin: 4rem 0;
}

@media screen and (max-width:414px){
  .principal{
  
  h2{
   
    font-size: 1.6rem;
  }
}
}
`