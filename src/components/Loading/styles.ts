import styled from 'styled-components'
import { Wave } from '../../styles/keyframes'

export const Container = styled.div`
  display: flex;
.dot {
  position: relative;
  width: 2em;
  height: 2em;
  margin: 0.8em;
  border-radius: 50%;

  &::before{
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    animation: ${Wave} 2s ease-out infinite;

  }

  &:nth-child(1) {
  background: #7ef9ff;
}
&:nth-child(1)::before {
  animation-delay: 0.2s;
}
&:nth-child(2) {
  background: #89cff0;
}
&:nth-child(3) {
  background: #4682b4;
}
&:nth-child(4) {
  background: #0f52ba;
}
&:nth-child(4)::before {
  animation-delay: 0.8s;
}
&:nth-child(5) {
  background: #000080;
}
&:nth-child(5)::before {
  animation-delay: 1s;
}
}

`