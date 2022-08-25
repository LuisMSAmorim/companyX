import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 7vh);
  background: ${(props) => props.theme['gray-300']};
`
