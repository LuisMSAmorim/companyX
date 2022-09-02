import styled from 'styled-components'

export const ListDepartmentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  flex-wrap: wrap;
`

export const ListDepartmentsBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;

  margin-top: 4vh;
  gap: 2rem;
`

export const DepartmentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 1;

  padding: 2rem;
  min-height: 5vh;
  width: 45vw;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  background: ${(props) => props.theme['purple-300']};
  transition: 0.3s;
  text-decoration: none;
  color: black;

  &:hover {
    background: ${(props) => props.theme['purple-700']};
    cursor: pointer;
  }
`
