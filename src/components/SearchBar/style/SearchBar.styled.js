import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 15px;
  font-size: 1rem;
  border: 2px solid var(--color-White);
  border-radius: 50px 0 0 50px;
  width: 500px;
`;

export const SearchButton = styled.button`
  padding: 15px 30px;
  font-size: 1rem;
  border: 2px solid var(--color-BrightYellow);
  background-color: var(--color-BrightYellow);
  border-radius: 0 50px 50px 0;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--color-LighterYellow);
  }
`;
