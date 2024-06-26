import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Card = styled.div`
  background-color: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  text-align: left;
  border: 2px solid #4a4a4a;
`;

export const CardTitle = styled.h1`
  padding: 10px;
  display: flex;
  justify-content: center;
`;

export const CardDetail = styled.p`
  margin: 10px 0;
  line-height: 1.5;
  background-color: #2e2e2e;
  padding: 5px 10px;
  border-radius: 5px;
`;
export const Loading = styled.p`
  color: var(--color-BrightYellow);
  text-align: center;
  font-size: 1.2rem;
  margin-top: 20px;
`;
