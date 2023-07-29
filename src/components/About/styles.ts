import styled from 'styled-components';
import backgroundPNG from '../../assets/backgroundPNG.png'


export const Container = styled.div`
position: relative;
color: #fff;
width: 100%;
height: auto;
min-height: 100vh;
display: flex;
color: #fff;
align-items: end;
justify-content: center;
flex-direction: column;
background-color: #000;

&::before {
    content: "";
    position: absolute;
    top: 0; 
    left: 0;
    width: 100%; 
    height: 100vh;  
    opacity: .08; 
    background-position: center;
    background-size: cover;
    background-color: #1E1E1E;
    background-image: url(${backgroundPNG});
    filter: brightness(0.6);
}
`