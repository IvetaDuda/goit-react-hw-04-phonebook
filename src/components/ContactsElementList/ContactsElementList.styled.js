import styled from 'styled-components';

export const Contacts = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  color: #2d2d2d;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: #000000;
`;

export const Button = styled.button`
  cursor: pointer;
  border-color: transparent;
  outline: none;
  border-radius: 3px;
  background-color: #f27b77;
  color: #ffffff;
  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #232323;
    border-color: transparent;
  }
`;
