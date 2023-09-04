import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  background: #000;
  display: flex;
  flex-direction: column;
  align-items: center;

  .welcome {
    padding: 1rem;
    margin: 4rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: center;

    span {
      color: #fff;
    }
    span:nth-child(2) {
      color: #00feff;
    }
  }

  h1 {
    font-size: 2rem;
    color: #fff;
    margin: 2rem;
    text-align: center;
  }

  .line {
    width: 70%;
    height: 1px;
    background-image: linear-gradient(to right, transparent, #5d5d5d, #38161600);
    border-radius: 50%;
    margin-bottom: 2rem;
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    margin: 2rem 1rem;

    .projects--card {
      h1 {
        color: #fff;
      }

      .image {
        max-width: 300px;
        img {
          width: 100%;
        }
      }
      a {
        color: #fff;
      }
    }
  }

  @media (max-width: 962px) {
    .projects {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 632px) {
    .projects {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
export const AddProject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;

  .frame {
    display: inline-block;
    position: relative;
    .lines {
      background:
        linear-gradient(to bottom, #34495e 2px, transparent 2px) 0 0,
        linear-gradient(to right, #34495e 2px, transparent 2px) 0 100%,
        linear-gradient(to left, #34495e 2px, transparent 2px) 100% 0,
        linear-gradient(to top, #34495e 2px, transparent 2px) 100% 100%;
      background-repeat: no-repeat;
      background-size: 0px 0px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transition: background-size 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .angles {
      background:
        linear-gradient(to right, #a6afc0 2px, transparent 2px) 0 0,
        linear-gradient(to bottom, #a6afc0 2px, transparent 2px) 0 0,
        linear-gradient(to left, #a6afc0 2px, transparent 2px) 100% 0,
        linear-gradient(to bottom, #a6afc0 2px, transparent 2px) 100% 0,
        linear-gradient(to left, #a6afc0 2px, transparent 2px) 100% 100%,
        linear-gradient(to top, #a6afc0 2px, transparent 2px) 100% 100%,
        linear-gradient(to right, #a6afc0 2px, transparent 2px) 0 100%,
        linear-gradient(to top, #a6afc0 2px, transparent 2px) 0 100%;
      background-repeat: no-repeat;
      background-size: 7px 7px;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0.48;
      transition: background-size 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    &:hover .lines {
      background-size: 100% 100%;
    }
    &:hover .angles {
      background-size: 14px 14px;
    }
  }
  article {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 6rem;
    cursor: pointer;

    button {
      border: none;
      background: transparent;
      z-index: 1;
      svg {
        font-size: 10rem;
        color: #fff;
        transition: 0.5s ease all;

        &:hover {
          color: #00d5c3;
        }
      }
    }
    &:before {
      content: '';
      background-color: rgba(255, 255, 255, 0.08);
      opacity: 0.46;
      position: absolute;
      top: 13px;
      right: 13px;
      bottom: 13px;
      left: 13px;
      transition: all 0.2s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    &:hover:before {
      top: 21px;
      right: 21px;
      bottom: 21px;
      left: 21px;
    }
  }
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000bd;
  z-index: 1;
  backdrop-filter: blur(1px);
`;

export const ModalContent = styled(animated.div)`
  max-width: 400px;
  padding: 1rem 2rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);

  .close {
    position: absolute;
    color: #ff0000ad;
    top: 15px;
    right: 27px;
    font-size: 5rem;
    cursor: pointer;
    transition: 0.5s ease all;

    &:hover {
      color: #ff0000;
    }
  }

  form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    height: auto;
    padding: 20px;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem;

    h2 {
      color: #eee;
      font-family: sans-serif;
      font-size: 36px;
      font-weight: 600;
      margin-top: 30px;
    }

    span {
      color: #eee;
      font-family: sans-serif;
      font-size: 16px;
      font-weight: 600;
      margin: 1rem 0;
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

    .ic3 {
      height: 200px;
    }

    .image-container {
      background-color: #15172b;
      width: 100%;
      height: 100%;
      background: #303245;
      border-radius: 15px;
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
      transition:
        transform 200ms,
        color 200ms;
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
      background-color: #08d;
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
    }

    .submit:active {
      background-color: #06b;
    }

    .image-container {
      width: 90%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
  }
`;
