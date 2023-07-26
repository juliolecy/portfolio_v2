import styled from 'styled-components'
import HomeBackground from '../../assets/backgroundHome.jpg'

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