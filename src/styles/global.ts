import { createGlobalStyle } from "styled-components";

export const GlobalStyles =  createGlobalStyle`
*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box;
}

html{
    font-size:62.5%;
    scroll-behavior: smooth;
    width: 100%;
        height: 100%;

}

body{
    
    font-family: 'Montserat', sans-serif;
    width: 100%;
    height: 1000px;
    font-size: 1.6rem;
}



button{
    cursor:pointer;
}

`