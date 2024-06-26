import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
`;

export const PaginationButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  border: 2px solid var(--color-BrightYellow);
  background-color: var(--color-BrightYellow);
  color: var(--color-Black);
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin: 26px 202px;

  &:hover {
    background-color: var(--color-LighterYellow);
  }

  &:disabled {
    background-color: var(--color-SoftBlueGrey);
    border-color: var(--color-SoftBlueGrey);
    cursor: not-allowed;
  }
`;