import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
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
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.primaryColor};
    color: ${({ theme }) => theme.textColor};
}

::-webkit-scrollbar{
    width: 10px;
    background-color: #000000f2;
}
::-webkit-scrollbar-thumb{
    background-color:#00edf8;
}
button{
    cursor:pointer;
}

a{
    text-decoration:none;
    color: inherit;
}
`;
