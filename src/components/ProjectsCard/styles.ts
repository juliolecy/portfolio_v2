import styled from 'styled-components';
import backgroundPNG from '../../assets/hello-world.webp'

export const ProjectContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 2rem;
font-family: 'Montserrat';
margin: 0 auto 4rem auto;

background: rgba( 0, 0, 0, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 8.5px );
-webkit-backdrop-filter: blur( 8.5px );
padding: 2rem;

.image{
  max-width: 300px;
  max-height: 100%;

  img{
    width: 100%;
    height: 100%;
    border-radius: 2rem;
  }
}

.content{
  max-width: 300px;
  align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    font-family: 'Montserrat';
    font-size: 1.6rem;
    color: ${props=> props.theme.colors.text};
  h1{
    text-transform: uppercase;
    font-size: 2rem;
  }
  p{
    color: #cecece;
  }

  .technologies{
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: 'Barlow';
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 4rem;
  }

  .links{
    display: flex;
    align-items: center;
    gap: 2rem;
    a{
    align-items: center;
    display: flex;
    gap: 6px;
    transition: .5s all ease;

    &:hover{
      transform: scale(1.2);
      color: #929292;
    }
    }
  }
}

@media screen and (max-width:750px){
  flex-direction: column-reverse;

  .technologies{
    margin-bottom: 2rem;
  }
}

@media screen and (max-width:414px){
 .content{
  font-size:1.6rem;

  .technologies{
    font-size:1.3rem;
  }
 }
}
`