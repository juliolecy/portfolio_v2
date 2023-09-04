import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

export const AccordionItem = styled.div`
  border-radius: 0.4rem;

  hr {
    border: ${props =>
      props.theme.title === 'dark' ? '1px solid rgba(255, 255, 255, 0.5)' : '1px solid rgb(0 0 0 / 50%)'};
  }

  .accordion-link {
    font-size: 1.6rem;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    .flex {
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }

    h3 {
      font-weight: 500;
      font-size: 20px;
    }

    i {
      color: ${props => props.theme.colors.text};
      padding: 0.5rem;
    }

    ul {
      display: flex;
      align-items: flex-end;
      list-style-type: none;

      li {
        font-size: 10px;
        color: ${props => props.theme.colors.textSecondary};
        padding: 0 0 1px 5px;
      }
    }

    div {
      display: flex;
    }

    .ion-md-arrow-down {
      display: none;
    }
  }

  .answer {
    max-height: 0;
    overflow: hidden;
    position: relative;
    transition: max-height 650ms;

    p {
      color: ${props => props.theme.colors.text};
      font-size: 15px;
      padding: 2rem;
    }
  }

  &:target {
    .answer {
      max-height: 20rem;
    }
  }
  &:target .accordion-link .ion-md-arrow-forward {
    display: none;
  }

  &:target .accordion-link .ion-md-arrow-down {
    display: block;
  }
`;
