import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: calc(100vh - 7vh);
  background: ${(props) => props.theme['blue-700']};
`
