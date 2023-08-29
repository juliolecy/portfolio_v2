import styled from 'styled-components';

export const Container = styled.div`
width: 100%;
min-height: 100vh;
height: auto;
background: #000;
display: flex;
flex-direction: column;
align-items: center;
color: #fff;

form{
  position: relative;
  margin: 3rem auto;
  background-color: #15172b;
  border-radius: 20px;
  box-sizing: border-box;
  height: auto;
  padding: 20px;
  max-width: 600px;
  display:flex;
  flex-direction: column;
  align-items: center;
  .back{
  position: absolute;
    top: 1rem;
    left: 2rem;
    font-size: 4rem;
    cursor: pointer;
    color: #ffffff96;
    &:hover{
      color: #fff;
    }
}

.title {
  color: #eee;
  font-family: sans-serif;
  font-size: 36px;
  font-weight: 600;
  margin-top: 30px;
}

.subtitle {
  color: #eee;
  font-family: sans-serif;
  font-size: 16px;
  font-weight: 600;
  margin:1rem 0;
}

.input-container {
  height: 50px;
  position: relative;
  width: 100%;
}

.ic1 {
  margin: 1rem 0;
}

.ic2 {
  margin-top: 30px;
}

.input {
  background-color: #303245;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  font-size: 18px;
  height: 100%;
  outline: 0;
  padding: 4px 20px 0;
  width: 100%;
}

.cut {
  background-color: #15172b;
  border-radius: 10px;
  height: 20px;
  left: 20px;
  position: absolute;
  top: -20px;
  transform: translateY(0);
  transition: transform 200ms;
  width: 76px;
}

.cut-short {
  width: 50px;
}

.input:focus ~ .cut,
.input:not(:placeholder-shown) ~ .cut {
  transform: translateY(8px);
}

.placeholder {
  color: #65657b;
  font-family: sans-serif;
  left: 20px;
  line-height: 14px;
  pointer-events: none;
  position: absolute;
  transform-origin: 0 50%;
  transition: transform 200ms, color 200ms;
  top: 20px;
}

.input:focus ~ .placeholder,
.input:not(:placeholder-shown) ~ .placeholder {
  transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown) ~ .placeholder {
  color: #808097;
}

.input:focus ~ .placeholder {
  color: #dc2f55;
}

.submit {
  background-color: #00d0ff66;
  border-radius: 12px;
  border: 0;
  box-sizing: border-box;
  color: #eee;
  cursor: pointer;
  font-size: 18px;
  height: 50px;
  margin-top: 38px;
  // outline: 0;
  text-align: center;
  width: 100%;
  transition: .5s ease all;

  &:hover{
    background-color: #00d0ffe0;
  }
}

.submit:active {
  background-color: #06b;
}

.image-container{
    width: 100%;
    margin: 0 auto;
    img{
      border-radius: 20px;
        width: 100%;
    }
}
}
`

