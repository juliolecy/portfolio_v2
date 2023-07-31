import styled from 'styled-components';
import backgroundPNG from '../../assets/backgroundPNG.png'


export const Container = styled.div`  
  .toggle-switch {
    position: relative;
    width: 200px;

  label {
    position: absolute;
    width: 100%;
    height: 100px;
    background-color: #28292c;
    border-radius: 50px;
    cursor: pointer;


  input {
    position: absolute;
    display: none;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
}

input:checked ~ .slider {
  background-color: #d8dbe0;
}

.slider::before {
  content: "";
  position: absolute;
  top: 13px;
  left: 16px;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  box-shadow: inset 28px -4px 0px 0px #d8dbe0;
  background-color: #28292c;
  transition: 0.3s;
}

input:checked ~ .slider::before {
  transform: translateX(95px);
  background-color: #28292c;
  box-shadow: none;
}
  }
  
  }
  
`