import styled from 'styled-components';
import { GlitchAnim2, GlitchAnim, GlitchSkew } from '../../styles/keyframes';

export const Container = styled.div`
  text-align: center;
  gap: 1rem;

  .glitch {
    font-weight: 200;
    font-family: 'Barlow';
    position: relative;
    color: #fff;
    font-size: 4rem;
    animation: ${GlitchSkew} 1s infinite linear alternate-reverse;
  }
  .glitch::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: 2px;
    text-shadow: -2px 0 #000;
    clip: rect(44px, 450px, 56px, 0);
    animation: ${GlitchAnim} 5s infinite linear alternate-reverse;
  }
  .glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    left: -2px;
    text-shadow:
      -2px 0 #000,
      2px 2px #00d5c3;
    clip: rect(44px, 450px, 56px, 0);
    animation: ${GlitchAnim2} 5s infinite linear alternate-reverse;
  }

  @media screen and (max-width: 700px) {
    .text {
      .glitch {
        font-size: 3rem;
      }
    }
  }

  @media screen and (max-width: 570px) {
    .text {
      .glitch {
        font-size: 2.5rem;
      }
    }
  }

  @media screen and (max-width: 460px) {
    .text {
      .glitch {
        font-size: 2rem;
      }
    }
  }

  @media screen and (max-width: 400px) {
    .text {
      .name {
        font-size: 1.6rem;
      }
      .glitch {
        font-size: 1.7rem;
      }
    }
  }
`;
