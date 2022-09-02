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
  min-width: 45vw;
  border-radius: 8px;
  font-size: 1.2rem;
  font-weight: bold;
  background: ${props => props.theme['purple-300']};
`

export const ListDepartmentsFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 4vh;
  
  a {
    font-weight: bold;
    font-size: 1.2rem;
    border-radius: 8px;
    padding: 1rem;
    background: ${props => props.theme['blue-500']};
    color: ${props => props.theme['white']};
    cursor: pointer;
    transition: 0.2s;
  }

  a:hover {
    background: ${props => props.theme['blue-300']};
  }
`
