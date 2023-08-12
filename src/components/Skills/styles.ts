import styled from 'styled-components';
import backgroundPNG from '../../assets/lines.png'


export const Container = styled.div`
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
    height: 100vh;  
    opacity: .1; 
    background-position: center;
    background-size: auto;
    background-color: ${props=> props.theme.colors.primary};
    background-image: url(${backgroundPNG});
    filter:${props=> props.theme.title === 'dark' ?  'brightness(0.6)' : 'none'};
    background-repeat: no-repeat;
}

.glitch{
  margin-bottom:4rem ;
}
`

