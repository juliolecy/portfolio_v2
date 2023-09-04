import styled from 'styled-components';
import { ScaleDot } from '../../styles/keyframes';

export const Container = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  z-index: 10;
  background: #000;
  .loading {
    width: 60px;
    height: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -30px 0 0 -30px;
    transform: rotate(45deg);
  }
  .loading div {
    width: 6px;
    height: 6px;
    background: #fff;
    border-radius: 100%;
    float: left;
    margin-bottom: 12px;
    animation: ${ScaleDot} 2s ease infinite;
  }
  .loading div:not(:nth-child(4n + 4)) {
    margin-right: 12px;
  }
  .loading div:nth-child(1) {
    animation-delay: 0;
  }
  .loading div:nth-child(2),
  .loading div:nth-child(5) {
    animation-delay: 0.1s;
  }
  .loading div:nth-child(3),
  .loading div:nth-child(6),
  .loading div:nth-child(9) {
    animation-delay: 0.2s;
  }
  .loading div:nth-child(4),
  .loading div:nth-child(7),
  .loading div:nth-child(10),
  .loading div:nth-child(13) {
    animation-delay: 0.3s;
  }
  .loading div:nth-child(8),
  .loading div:nth-child(11),
  .loading div:nth-child(14) {
    animation-delay: 0.4s;
  }
  .loading div:nth-child(12),
  .loading div:nth-child(15) {
    animation-delay: 0.5s;
  }
  .loading div:nth-child(16) {
    animation-delay: 0.6s;
  }
`;
