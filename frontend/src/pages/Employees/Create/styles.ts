import styled from 'styled-components'

export const CreateEmployeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  margin-bottom: 2vh;
  padding: 0 2vw;
  width: 95%;
  height: 90%;
`

export const CreateEmployeeHeaderContainer = styled.header`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 1vh;

  a {
    background: red;
    padding: 0.8rem;
    border-radius: 8px;
    background: ${(props) => props.theme['blue-700']};
    color: ${(props) => props.theme.white};
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }
`

export const CreateEmployeeBodyContainer = styled.div`
display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 1vh;

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    h3 {
      font-size: 1.5rem;
      font-weight: bold;
      text-align: center;
      margin: 1rem 0;
    }

    span {
      background: ${(props) => props.theme.red};
      margin-bottom: 1vh;
      text-align: center;
      border-radius: 8px;
    }

    input {
      padding: 0 1rem;
      height: 5vh;
      text-align: center;
      font-size: 1rem;
      border-radius: 8px;
      margin-top: 0.5rem;
      border: 1px solid ${(props) => props.theme['gray-300']};
    }

    select {
      height: 5vh;
      border-radius: 8px;
      margin-top: 0.5rem;
      border: 1px solid ${(props) => props.theme['gray-300']};
      
      text-align: center;
      font-size: 1rem;
      font-weight: bold;
      background: ${(props) => props.theme['blue-700']};
      color: ${(props) => props.theme.white};

      option {
        font-weight: bold;

      }
    }

    input[type='submit'] {
      margin-top: 2vh;
      background: red;
      border-radius: 8px;
      background: ${(props) => props.theme['blue-700']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      cursor: pointer;
      border: none;
    }
  }
`
