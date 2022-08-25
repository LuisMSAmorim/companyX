import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: start;
  background: ${(props) => props.theme['gray-300']};
  padding: 1rem 4rem;
  height: 7vh;
`
