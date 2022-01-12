import styled from 'styled-components';
import {
  TextExtraLarge,
} from '../Styled/Text';

export const Wrapper = styled(TextExtraLarge)`
  display: flex;
  align-items: left;
  justify-content: left;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.primaryBrown};
`;
