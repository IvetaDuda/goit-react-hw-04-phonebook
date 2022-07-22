import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

export const Label = styled.label`
  width: 300px;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.03em;
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
  cursor: pointer;
  outline: none;
  color: #232323;
`;

export const Input = styled.input`
  width: 300px;
  height: 20px;
  border-color: transparent;
  border-radius: 3px;
  margin-bottom: 20px;
  outline: none;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 9px 3px rgba(242, 123, 119, 0.4);
  }
`;
export const Button = styled.button`
  width: 308px;
  height: 28px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  background-color: #f27b77;
  color: #ffffff;
  border-color: transparent;
  border-radius: 3px;
  cursor: pointer;
  outline: none;
  &:hover,
  &:focus {
    background-color: #ffffff;
    color: #232323;
    border-color: transparent;
  }
`;
