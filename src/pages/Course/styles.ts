import styled from 'styled-components';
import backgroundPNG from '../../assets/lines.png';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${(props) => (props.theme.title === 'dark' ? 0.2 : 0.1)};
    background-color: ${(props) => props.theme.colors.primary};
    background-size: auto;
    background-image: url(${backgroundPNG});
    filter: ${(props) => (props.theme.title === 'dark' ? 'brightness(0.6)' : 'none')};
    background-repeat: no-repeat;
  }
`;

export const Content = styled.div`
  margin: 2rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
  }
  .image--container {
    margin: 2rem 1rem;
    img {
      width: 100%;
      border-radius: 15px;
    }
  }
`;

export const CourseInformation = styled.div`
  margin: 2rem 1rem;
  .card {
    max-width: 550px;
    border: 0;
    width: 100%;
    margin-inline: auto;
  }

  .container-card {
    position: relative;
    border: 2px solid transparent;
    background: linear-gradient(71deg, #080509, #1a171c, #080509);
    background-clip: padding-box;
    border-radius: 45px;
    padding: 40px;
  }

  .card--title {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    svg {
      font-size: 3rem;
      color: green;
    }
    p {
      font-weight: 600;
      color: white;
      letter-spacing: -0.02em;
      line-height: 40px;
      font-style: normal;
      font-size: 28px;
      text-align: center;
    }
  }

  .card--description {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;

    .line {
      display: flex;
      align-items: center;
      gap: 1rem;
      justify-content: center;
      svg {
        color: #fff;
      }

      span {
        color: rgba(255, 255, 255, 0.5);
      }
    }
  }

  .topics {
    margin: 2rem auto;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    h2 {
    }

    ul {
      li {
        margin: 1rem 0;
      }
    }
  }
`;
