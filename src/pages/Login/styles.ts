import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  font-family: 'Roboto', helvetica, arial, sans-serif;
  font-size: 1.5em;
  background: #000;

  span{
    color: red;
    margin-bottom: 1rem;
    text-transform: uppercase;
  }

.form {
  width: 100%;
  padding: 2em;
  position: relative;
  background: rgba(black, .15);

  &:before {
    content: '';
    position: absolute;
    top: -2px; left: 0;
    height: 2px; width: 100%;

    background: linear-gradient(to right,#35c3c1,#35c3c1    );
  }

  @media screen and (min-width: 600px) {
    width: 50vw;
    max-width: 15em;
  }
}

  .row {
    display: flex;
    margin-bottom: 1em;


  .svg--container {
    width: 2em;
    display: flex;
    align-items: center;
    justify-content: center;

    background:  #f5f6f8;
    cursor: pointer;
  }
  .input {
    flex: 1;
    padding: 1em;
    border: 0;
    color:  #8f8f8f;
    font-size: 1rem;

    &:focus {
      outline: none;
      transition: transform .15s ease;
      transform: scale(1.1);
    }
  }

}
  .submit--btn {
    display: block;
    padding: 1em;
    width: 100%;

    background: linear-gradient(to right,#35c3c1,#35c3c1    );
    border: 0;
    color: #fff;
    cursor: pointer;
    font-size: .75em;
    font-weight: 600;
    text-shadow: 0 1px 0 rgba(black, .2);

    &:focus {
      outline: none;
      transition: transform .15s ease;
      transform: scale(1.1);
    }
  }

.lf--forgot {
  margin-top: 1em;
  color:  #35c3c1;
  font-size: .65em;
  text-align: center;
  position: relative;
}

::placeholder { color:  #8f8f8f; }
`