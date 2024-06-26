import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ContainerBack = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  background-color: var(--color-BrightYellow);
  padding: 10px 20px;
  border: 2px solid var(--color-BrightYellow);
  border-radius: 50px;
  transition: background-color 0.3s;
  margin-top: 20px;

  &:hover {
    background-color: var(--color-LighterYellow);
  }
`;

export const TitleBack = styled.h4`
  color: var(--color-Black);
  padding-left: 15px;
`;
