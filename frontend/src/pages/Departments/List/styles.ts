import styled from 'styled-components'

export const DepartmentList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  padding: 0 2vw;
  width: 95%;
  height: 90%;
`

export const DepartmentHeader = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  margin-top: 1vh;

  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

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
`

export const DepartmentListBody = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  margin-top: 2vh;
  gap: 1rem;
`

export const DepartmentCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-basis: auto;
  text-align: center;

  background: ${(props) => props.theme['purple-700']};
  max-width: 40vh;
  padding: 20px;
  margin-top: 2vh;
  border-radius: 8px;

  h2 {
    color: ${(props) => props.theme.white};
    font-size: 1.5rem;
    font-weight: bold;
  }

  div {
    margin-top: 1rem;
    flex-wrap: wrap;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    flex: 1;

    a {
      padding: 0.4rem;
      border-radius: 8px;
      background: ${(props) => props.theme['purple-100']};
      color: ${(props) => props.theme['blue-700']};
      text-decoration: none;
      font-size: 1rem;
      font-weight: bold;
    }
  }
`
