import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  transition: all 150ms ease;
  &:hover {
    text-decoration: underline;
  }
`;

export const NavWrap = styled.div`
  height: 70px;
  display: flex;
  gap: 15px;
  color: #ffff;
  font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  align-items: center;
  padding: 10px;
  margin-bottom: 16px;
  background-color: #4caf50;
`;
