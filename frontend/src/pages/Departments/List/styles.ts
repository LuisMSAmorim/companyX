import styled from 'styled-components'

export const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 0 2vw;
  width: 95%;
  height: 90%;

  background: blue;

  h1 {
    font-size: 2.5rem;
    margin: 5vh 5vh 0;
  }
`

export const DepartmentListBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  background: white;
  margin-top: 2vh;
  gap: 1rem;
`

export const DepartmentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: auto;

  background: red;
  max-width: 40vh;
  padding: 20px;
  margin-top: 2vh;

  div {
    margin-top: 1rem;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex: 1;
  }
`
