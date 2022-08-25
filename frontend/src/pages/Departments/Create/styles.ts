import styled from 'styled-components'

export const CreateDepartmentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 0 2vw;
  width: 95%;
  height: 90%;
`

export const CreateDepartmentHeader = styled.header`
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

export const CreateDepartmentListBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 5vh;

  form {
    display: flex;
    flex-direction: column;
    width: 100vh;

    input {
      height: 5vh;
      text-align: center;
      font-size: 1.5rem;
    }

    input[type='submit'] {
      margin-top: 2vh;
      background: red;
      border-radius: 8px;
      background: ${(props) => props.theme['blue-700']};
      color: ${(props) => props.theme.white};
      font-weight: bold;
      cursor: pointer;
    }
  }
`
