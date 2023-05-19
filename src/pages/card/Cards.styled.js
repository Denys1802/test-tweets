import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const Section = styled.section`
  margin-left: auto;
  margin-right: auto;
  padding: 0 15px;
  padding-bottom: 50px;
`;

export const SectionBack = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`;

export const ButtonBack = styled(Link)`
  display: inline-flex;
  color: #ffff;
  background-color: #4caf50;
  list-style: none;
  padding: 10px 22px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  transition: all 150ms ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const LoadMore = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoadMoreBtn = styled.button`
  display: flex;
  color: #ffff;
  background-color: #4caf50;
  list-style: none;
  padding: 15px 22px;
  margin: auto;
  margin-bottom: 80px;
  margin-top: 50px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 10px;
  border: none;
  transition: all 150ms ease;
  &:hover {
    opacity: 0.8;
  }
`;

export const Filter = styled.label`
  font-size: 18px;
  font-family: 'Montserrat', sans-serif;
  background-color: #4caf50;
  padding: 13px 22px;
  border-radius: 10px;
  color: #fff;
  text-transform: uppercase;
`;

export const Select = styled.select`
  font-weight: 900;
  margin-left: 5px;
  border: none;
  border-radius: 10px;
  padding: 3px 5px;
  text-transform: uppercase;
  color: #4caf50;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;
`;

export const ButtonNone = styled.button`
  display: none;
`;
