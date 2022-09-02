import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0 3vh;
  min-height: 8.5vh;

  background: ${(props) => props.theme['blue-700']};
  color: ${(props) => props.theme.white};

  h1 {
    margin: 1vh 0;
    font-size: 2.5rem;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    font-size: 1.4rem;
    color: ${(props) => props.theme.white};
    cursor: pointer;
  }
`
