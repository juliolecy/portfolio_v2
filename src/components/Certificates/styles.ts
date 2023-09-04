import styled from 'styled-components';
import backgroundPNG from '../../assets/lines.png';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100vh;
  display: flex;
  color: #fff;
  align-items: center;
  flex-direction: column;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.primary};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: ${props => (props.theme.title === 'dark' ? 0.2 : 0.1)};
    background-color: ${props => props.theme.colors.primary};
    background-size: auto;
    background-image: url(${backgroundPNG});
    filter: ${props => (props.theme.title === 'dark' ? 'brightness(0.6)' : 'none')};
    background-repeat: no-repeat;
  }
  .principal {
    z-index: 2;
    margin-top: 5rem;
    align-items: center;
    display: flex;
    flex-direction: column;
    h1 {
      margin-bottom: 1rem;
    }
    h2 {
      font-family: 'Montserrat';
      color: ${props => props.theme.colors.text};
      font-weight: 200;
      font-size: 2rem;
      text-align: center;
    }
  }

  .line {
    height: 1px;
    background: linear-gradient(to right, transparent, #5d5d5d73, #38161600);
    border-radius: 50%;
    width: 100%;
    margin: 4rem 0;
  }

  @media screen and (max-width: 414px) {
    .principal {
      h2 {
        font-size: 1.6rem;
      }
    }
  }
`;

export const ProjectsContainer = styled.ul`
  /* * {
  font-family: "Sofia", sans-serif;
} */

  align-items: center;
  justify-content: center;
  gap: 15px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 2rem auto;

  .booking-card {
    position: relative;
    width: 277px;
    display: flex;
    flex-direction: column;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
    overflow: hidden;
    background-position: center center;
    background-size: cover;
    text-align: center;
    color: #000;
    transition: 0.3s;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;

    .book-container {
      height: 200px;
      .content {
        position: relative;
        opacity: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        transform: translateY(-200px);
        transition: 0.3s;
        .btn {
          border: 3px solid white;
          padding: 10px 15px;
          background: none;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 1.3em;
          color: white;
          cursor: pointer;
          transition: 0.3s;

          &:hover {
            background: white;
            border: 0px solid white;
            color: #0a4870;
          }
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: transparent;
      transition: 0.3s;
    }

    .informations-container {
      flex: 1 0 auto;
      padding: 20px;
      background: #f0f0f0;
      transform: translateY(241px);
      transition: 0.5s;

      .title {
        position: relative;
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 1.2em;
        color: #000;

        &::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          width: 50px;
          margin: auto;
          background: #0a4870;
        }
      }

      .hours--container {
        display: flex;
        flex-direction: column;

        .hours {
          padding: 15px;
          margin-top: 10px;
          -webkit-border-radius: 10px;
          -moz-border-radius: 10px;
          border-radius: 10px;
          background: white;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 2rem;
          display: flex;
          justify-content: center;
        }
      }
    }

    &:hover::before {
      background: rgb(0 229 255 / 23%);
    }

    &:hover .book-container .content {
      opacity: 1;
      transform: translateY(0px);
    }

    &:hover .informations-container {
      transform: translateY(0px);
      .more-information {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    ul .booking-card::before {
      background: rgba(10, 72, 112, 0.6);
    }
    ul .booking-card .book-container .content {
      opacity: 1;
      transform: translateY(0px);
    }
    ul .booking-card .informations-container {
      transform: translateY(0px);
    }
    ul .booking-card .informations-container .more-information {
      opacity: 1;
    }
  }
`;
