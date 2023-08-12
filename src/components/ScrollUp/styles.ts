import styled from 'styled-components'

interface ContainerProps{
    scrolled:boolean;
}
export const Container = styled.a<ContainerProps>`
position: fixed;
right: 1rem;
bottom: ${({scrolled}) => scrolled? '2rem' : '-20%'};
color: #fff;
opacity: .8;
padding: 0 .3rem;
z-index: 9;
border-radius: 50%;
align-items: center;
background-color: #000;
transition: .7s;
svg{
    font-size: 3rem;
    color: var(--main-color);
}
`