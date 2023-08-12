import styled, { keyframes } from 'styled-components'
import HomeBackground from '../../assets/backgroundHome.jpg'
import { Arrow, Morph } from '../../styles/keyframes'

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
    background-color: ${props=> props.theme.colors.primary};

    background-image: ${props=> props.theme.title === 'dark' ? `linear-gradient(rgb(0 0 0 / 78%), rgb(0 0 0 / 64%)), url(${HomeBackground})` : `linear-gradient(rgb(0 0 0 / 0%), rgb(255 255 255 / 32%)), url(${HomeBackground})`};
}

span{
    font-family: 'Barlow';
    font-size: 2rem;
    color: ${props=> props.theme.colors.textSecondary};
}

.arrows {
	width: 60px;
	height: 72px;
	position: absolute;
	left: 50%;
	margin-left: -30px;
    bottom: 7rem;
    z-index:1;

}

.arrows path {
	stroke: #4ebfff;
	fill: transparent;
	stroke-width: 1px;	
	animation: ${Arrow} 2s infinite;
	-webkit-animation: ${Arrow} 2s infinite; 
}


.arrows path.a1 {
	animation-delay:-1s;
	-webkit-animation-delay:-1s; /* Safari 和 Chrome */
}

.arrows path.a2 {
	animation-delay:-0.5s;
	-webkit-animation-delay:-0.5s; /* Safari 和 Chrome */
}

.arrows path.a3 {	
	animation-delay:0s;
	-webkit-animation-delay:0s; /* Safari 和 Chrome */
}

 .shadow{
    background: ${props=>props.theme.title ==='dark' ? 'linear-gradient(0deg,#000 10%,transparent 90%)' : 'linear-gradient(0deg,#fff 10%,transparent 90%)'};
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
