import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
height: auto;
background: #000;
display: flex;
flex-direction: column;
align-items: center;

.welcome{
    padding: 1rem;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    span{
        color: #fff;
    }
    span:nth-child(2){
        color: red;
    }
}

h1{
    color: #fff;
    margin-bottom: 2rem;
}

.projects {
    display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 20px; 
  margin: 0 auto;
  padding: 0 1rem;

    .projects--card{
        h1{
            color: #fff;
        }

        .image{
            max-width: 300px;
            img{
                width: 100%;
            }
        }
        a{
            color: #fff;
        }
    }
}
`

