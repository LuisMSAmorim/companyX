import styled from 'styled-components'

export const DepartmentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;

  height: 100%;
  margin: 2rem;

  background-color: ${(props) => props.theme.white};

  header {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 1.3rem;
  }
`
