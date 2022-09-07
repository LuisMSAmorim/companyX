import styled from 'styled-components'

export const ListDepartmentsHeader = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-top: 1vh;
  width: 100%;
  gap: 1rem;

  a {
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${(props) => props.theme['blue-500']};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    transition: 0.2s;
    margin-left: 1rem;
  }

  a:hover {
    background: ${(props) => props.theme['blue-300']};
  }
`
