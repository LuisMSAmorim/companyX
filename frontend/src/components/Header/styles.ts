import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: start;
  background: ${(props) => props.theme['blue-700']};
  padding: 1rem 4rem;
  height: 7vh;

  h1 {
    color: ${(props) => props.theme.white};
  }
`
