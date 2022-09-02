import styled from 'styled-components'

export const CreateDepartmentsContainer = styled.div`
`

export const CreateDepartmentsBody = styled.div`
  margin-top: 2rem;
`

export const CreateDepartmentsForm = styled.form`
  display: flex;
  flex-direction: column;

  /* margin-top: 2rem; */

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
    padding: 0.5rem;
    border-radius: 8px;
    border: none;

    font-weight: bold;
    font-size: 1.2rem;
    background: ${(props) => props.theme['blue-700']};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: 0.2s;
  }

  button:hover {
    background: ${(props) => props.theme['blue-300']};
  }
`
