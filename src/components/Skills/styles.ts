import styled from 'styled-components';
import backgroundPNG from '../../assets/lines.png'

interface Container {
  name:string;
}
export const Container = styled.div<Container>`
position: relative;
color: #fff;
width: 100%;
height: auto;
min-height: 100vh;
display: flex;
align-items: center;
flex-direction: column;
background-color: ${props=> props.theme.colors.primary};
display: flex;
align-items: center;

&::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100%;  
    opacity: .1; 
    background-position: center;
    background-size: auto;
    background-color: ${props=> props.theme.colors.primary};
    background-image: url(${backgroundPNG});
    filter:${props=> props.theme.title === 'dark' ?  'brightness(0.6)' : 'none'};
    background-repeat: no-repeat;
}

.line{
    height: 1px;
    background:linear-gradient(to right, transparent, #5d5d5d73, #38161600);
    border-radius: 50%;
    width: 100%;
    margin: 2rem 0;
};

h2{
    font-family: 'Montserrat';
    color: ${props=> props.theme.colors.text};
    font-weight: 200;
    font-size: 2rem;
    margin-bottom:2rem ;
    text-align: center;
  }

.glitch{
  margin:4rem 0 2rem 0 ;
}
`

