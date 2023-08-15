import styled, { keyframes } from 'styled-components';

export const scroll = keyframes`
0% {
    transform: translateX(0);
}
100%{
    transform: translateX(calc(-250px * 9))
}
`

export const stackAnimation = keyframes`
0% {
    opacity: 0;
    transform: translateX(-50%);
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
  };
  60% {
    opacity: 0.5;
    transform: translateX(50%);
  }
  80% {
    transform: none;
    opacity: 1;
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  100% {
    text-shadow: none;
  }

`
export const glitchAnimation = keyframes`
 0% {
    text-shadow: -2px 3px 0 red, 2px -3px 0 blue;
    transform: translate(var(--glitch-translate));
  }
  2% {
    text-shadow: 2px -3px 0 red, -2px 3px 0 blue;
  }
  4%, 100% {  text-shadow: none; transform: none; }
`;
export const Morph = keyframes`
   0%, 5%, 100%{
        filter: blur(0px);
        opacity: 1;
    }
    20%, 80%{
        filter: blur(35px);
        opacity: 0;
    }
`
export const animate = keyframes`
    0%{
        background-position: -500%;
    }
    100%{
        background-position: 500%;
      }
`
export const GlitchAnim = keyframes`
  0% {
    clip: rect(82px, 9999px, 37px, 0);
    transform: skew(0.55deg);
  }
  5% {
    clip: rect(61px, 9999px, 61px, 0);
    transform: skew(0.73deg);
  }
  10% {
    clip: rect(96px, 9999px, 55px, 0);
    transform: skew(0.98deg);
  }
  15% {
    clip: rect(8px, 9999px, 33px, 0);
    transform: skew(0.3deg);
  }
  20% {
    clip: rect(79px, 9999px, 15px, 0);
    transform: skew(0.23deg);
  }
  25% {
    clip: rect(80px, 9999px, 15px, 0);
    transform: skew(0.09deg);
  }
  30% {
    clip: rect(22px, 9999px, 27px, 0);
    transform: skew(0.18deg);
  }
  35% {
    clip: rect(41px, 9999px, 41px, 0);
    transform: skew(0.79deg);
  }
  40% {
    clip: rect(80px, 9999px, 8px, 0);
    transform: skew(0.78deg);
  }
  45% {
    clip: rect(33px, 9999px, 72px, 0);
    transform: skew(0.93deg);
  }
  50% {
    clip: rect(37px, 9999px, 12px, 0);
    transform: skew(0.31deg);
  }
  55% {
    clip: rect(40px, 9999px, 91px, 0);
    transform: skew(0.36deg);
  }
  60% {
    clip: rect(9px, 9999px, 100px, 0);
    transform: skew(0.41deg);
  }
  65% {
    clip: rect(54px, 9999px, 5px, 0);
    transform: skew(0.02deg);
  }
  70% {
    clip: rect(86px, 9999px, 80px, 0);
    transform: skew(0.48deg);
  }
  75% {
    clip: rect(80px, 9999px, 11px, 0);
    transform: skew(0.18deg);
  }
  80% {
    clip: rect(9px, 9999px, 38px, 0);
    transform: skew(0.01deg);
  }
  85% {
    clip: rect(40px, 9999px, 51px, 0);
    transform: skew(0.22deg);
  }
  90% {
    clip: rect(41px, 9999px, 47px, 0);
    transform: skew(0.76deg);
  }
  95% {
    clip: rect(75px, 9999px, 83px, 0);
    transform: skew(0.24deg);
  }
`
export const GlitchAnim2 =keyframes`
  0% {
    clip: rect(9px, 9999px, 32px, 0);
    transform: skew(0.48deg);
  }
  5% {
    clip: rect(50px, 9999px, 7px, 0);
    transform: skew(0.93deg);
  }
  10% {
    clip: rect(16px, 9999px, 5px, 0);
    transform: skew(0.39deg);
  }
  15% {
    clip: rect(58px, 9999px, 76px, 0);
    transform: skew(0.36deg);
  }
  20% {
    clip: rect(42px, 9999px, 48px, 0);
    transform: skew(0.89deg);
  }
  25% {
    clip: rect(20px, 9999px, 23px, 0);
    transform: skew(0.7deg);
  }
  30% {
    clip: rect(28px, 9999px, 100px, 0);
    transform: skew(0.67deg);
  }
  35% {
    clip: rect(64px, 9999px, 71px, 0);
    transform: skew(0.68deg);
  }
  40% {
    clip: rect(81px, 9999px, 58px, 0);
    transform: skew(0.57deg);
  }
  45% {
    clip: rect(84px, 9999px, 74px, 0);
    transform: skew(0.78deg);
  }
  50% {
    clip: rect(65px, 9999px, 89px, 0);
    transform: skew(0.66deg);
  }
  55% {
    clip: rect(11px, 9999px, 53px, 0);
    transform: skew(0.57deg);
  }
  60% {
    clip: rect(79px, 9999px, 17px, 0);
    transform: skew(0.49deg);
  }
  65% {
    clip: rect(58px, 9999px, 14px, 0);
    transform: skew(0.58deg);
  }
  70% {
    clip: rect(96px, 9999px, 13px, 0);
    transform: skew(0.15deg);
  }
  75% {
    clip: rect(65px, 9999px, 35px, 0);
    transform: skew(0.87deg);
  }
  80% {
    clip: rect(96px, 9999px, 49px, 0);
    transform: skew(0.31deg);
  }
  85% {
    clip: rect(51px, 9999px, 14px, 0);
    transform: skew(0.36deg);
  }
  90% {
    clip: rect(9px, 9999px, 14px, 0);
    transform: skew(0.97deg);
  }
  95% {
    clip: rect(4px, 9999px, 45px, 0);
    transform: skew(0.85deg);
  }
`
export const GlitchSkew = keyframes`
  0% {
    transform: skew(-3deg);
  }
  10% {
    transform: skew(0deg);
  }
  20% {
    transform: skew(4deg);
  }
  30% {
    transform: skew(3deg);
  }
  40% {
    transform: skew(1deg);
  }
  50% {
    transform: skew(2deg);
  }
  60% {
    transform: skew(3deg);
  }
  70% {
    transform: skew(2deg);
  }
  80% {
    transform: skew(3deg);
  }
  90% {
    transform: skew(1deg);
  }
`
export const Arrow = keyframes`
0%{opacity:0};
40% {opacity:1};
80% {opacity:0};
100% {opacity:0};
`
export const Wave = keyframes`
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }`
