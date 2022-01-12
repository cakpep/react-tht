import styled from 'styled-components';
import {
  TextButton,
} from './Text';

export const Button = styled(TextButton)`
  background: ${({ theme }) => theme.colors.primaryGreen};
  cursor: pointer;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryGreen};
  }
`;

export const SelectButton = styled(Button)`
  border: 0;
  outline: none;
  margin-top: 10px;
  padding: 19px;
  width: 100%;
`;

export const FloatingButton = styled(Button)`
  position: fixed;
  // width: 60px;
  bottom: 40px;
  right: 40px;
  background: ${({ theme }) => theme.colors.primaryGreen};
  color: ${({ theme }) => theme.colors.primaryText};
  border-radius: 50px;
  text-align: center;
  padding: 20px;
  border: 0;
  outline: none;
`;

export const FloatingButtonLabel = styled.label`
  margin-top:22px;
`;
