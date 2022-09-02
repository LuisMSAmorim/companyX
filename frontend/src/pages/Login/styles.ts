import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 1px 3px 0 ${(props) => props.theme['purple-700']};

  margin: 5vh auto;
  padding: 4rem 2rem;
  border-radius: 8px;
  max-width: 100vh;
  min-height: 50vh;

  background: ${(props) => props.theme['purple-500']};
  color: ${(props) => props.theme.white};

  h1 {
    font-size: 3.5rem;
    text-shadow: 2px 2px 2px black;
  }

  div {
    margin-top: 1.8rem;
    margin-bottom: -2rem;
  }
`

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;

  margin-top: 2rem;
  width: 100%;

  input {
    margin-top: 1rem;
    padding: 0.5rem;
    text-align: center;
    border-radius: 8px;
    border: none;

    font-size: 1.2rem;
  }

  input:focus {
    outline: none;
  }

  button {
    margin-top: 2rem;
    padding: 1rem;
    border-radius: 8px;
    border: none;

    font-weight: bold;
    font-size: 1.6rem;
    background: ${(props) => props.theme['blue-700']};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background: ${(props) => props.theme['blue-300']};
  }
`
