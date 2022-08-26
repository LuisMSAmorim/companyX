import styled from 'styled-components'

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  height: 100%;
  min-height: 93vh;
  background: ${(props) => props.theme['blue-700']};
`
