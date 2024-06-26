import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  padding: 20px;
`;
export const CharacterItem = styled.div`
  margin: 22px 0;
  transition:
    background-color 0.3s,
    transform 0.3s;
  text-align: center;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-SkyBlue);
    transform: scale(2.05);
    color: var(--color-BrightYellow);
  }
`;
export const Loading = styled.p`
  color: var(--color-BrightYellow);
  text-align: center;
  font-size: 1.2rem;
  margin-top: 90px;
`;
