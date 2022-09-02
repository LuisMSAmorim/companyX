import styled from 'styled-components'

export const ListDepartmentEmployeesContainer = styled.div``

export const ListDepartmentEmployeesBody = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;

  margin-top: 4vh;
  gap: 2rem;
`

export const EmployeeCard = styled.div.attrs((props: { isOnVacation: boolean }) => props)`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex-grow: 2;

  padding: 2rem;
  min-height: 5vh;
  width: 45vw;
  border-radius: 8px;
  background: ${(props) => props.isOnVacation ? props.theme['gray-300'] : props.theme['purple-300']};
  transition: 0.3s;
  text-decoration: none;
  color: black;
  transition: 0.3s;

  &:hover {
    background: ${(props) => props.isOnVacation ? props.theme['gray-700'] : props.theme['purple-700']};
    cursor: pointer;
  }
`

export const EmplooyeeCardHeader = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`

export const EmployeeCardBody = styled.div`
  font-size: 1rem;

  p {
    padding-top: 0.8rem;
    font-weight: bold;
  }

  span {
    font-weight: bold;
  }
`
