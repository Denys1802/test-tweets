import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  height: 150px;
  margin: 100px auto 0 auto;
  background-color: #4caf50;
  border-radius: 8px;
`;

export const HomeTitle = styled.h1`
  color: #ffff;
  font-weight: 500;
  font-size: 32px;
  text-align: center;
  padding: 15px;
`;

export const NavigateLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: underline;
  transition: all 150ms ease;
  &:hover {
    text-decoration: none;
  }
`;
