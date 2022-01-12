import styled from 'styled-components';
import {
  TextButton,
  TextMedium,
} from '../Styled/Text';

const getSelectedBackground = (
  isSelected, theme
) => (isSelected ? theme.colors.secondaryGreen : theme.colors.primaryGreen);

export const NomineeWrapper = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  justify-content: center;
`;

export const NomineeItem = styled.div`
  background: ${({ theme, isSelected }) => getSelectedBackground(isSelected, theme)};
  min-width: 300px;
  max-width: 300px;
  min-height: 285px;
  margin: 5px 8px 8px 5px;
  text-align: center;
  position: relative;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryGreen};
  }
  @media only screen and (min-width: 400px) {
    min-width: 388px;
    max-width: 388px;
  }
  @media only screen and (min-width: 600px) {
    min-width: 300px;
    max-width: 300px;
  }
  @media only screen and (min-width: 900px) {
    min-width: 300px;
    max-width: 300px;
  }
`;

export const NomineeTitle = styled(TextMedium)`
  display: block;
  padding: 5px 10px;
  min-height: 45px;
`;

export const NomineePhoto = styled.img`
  width: 125px;
  height: 125px;
  border-radius: 50%;
  &:hover {
    border-radius: 5%;
  }
`;

export const SelectButton = styled(TextButton)`
  background: ${({ theme, isSelected }) => getSelectedBackground(isSelected, theme)};
  cursor: pointer;
  border: 0;
  outline: none;
  margin-top: 10px;
  padding: 19px;
  width: 100%;
  &:hover {
    background: ${({ theme }) => theme.colors.secondaryGreen};
  }
`;