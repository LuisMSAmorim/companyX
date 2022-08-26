import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: start;
  background: ${(props) => props.theme['blue-700']};
  padding: 1rem 4rem;
  height: 7vh;
  width: 100%;

  h1 {
    color: ${(props) => props.theme.white};
  }
`
