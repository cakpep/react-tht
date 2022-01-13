import styled from 'styled-components';
import {
  TextExtraLarge,
} from '../Styled/Text';

export const Wrapper = styled(TextExtraLarge)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  @media only screen and (max-width: 400px) {
    margin-bottom: 40px;
  }
`;

export const TextHeader = styled.span`
  font-size: ${({ theme }) => theme.font.size.extraLarge};
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;
