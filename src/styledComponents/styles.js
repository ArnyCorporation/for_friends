import styled from 'styled-components';

export const Button = styled.a`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: balck;
  border: 2px solid black;
  text-decoration: none;

  &:visited, &:link {
    color: black;
  }`;

export const Wrapper = styled.div`
  width: 1150px;
`;
