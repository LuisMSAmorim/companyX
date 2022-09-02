import styled from "styled-components";

export const ErrorMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
  height: 3rem;
  width: 100%;
  background: ${(props) => props.theme['red']};

  font-size: 1.2rem;
  font-weight: bold;
`
