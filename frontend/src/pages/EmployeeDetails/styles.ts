import styled from "styled-components";

export const EmployeeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: center;

  border-radius: 8px;
  background: ${(props) => props.theme['purple-300']};
  font-weight: bold;
  padding: 0;

  h1 {
    font-size: 3.5rem;
    margin: 2rem 0;
  }

  h2 {
    margin: 1.4rem 0;
    font-size: 2rem;
  }

  div {
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['purple-700']};
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme['purple-700']};
    background: ${(props) => props.theme['purple-100']};
    max-width: 80%;
    min-width: 50%;
    margin: 1vh 0;
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`
