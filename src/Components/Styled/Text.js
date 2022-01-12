import styled from 'styled-components';

export const TextExtraSmall = styled.p`
  font-size: ${({ theme }) => theme.font.size.extraSmall};
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const TextSmall = styled.p`
  font-size: ${({ theme }) => theme.font.size.small};
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const TextMedium = styled.p`
  font-size: ${({ theme }) => theme.font.size.medium};
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const TextLarge = styled.p`
  font-size: ${({ theme }) => theme.font.size.large};
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const TextExtraLarge = styled.p`
  font-size: ${({ theme }) => theme.font.size.extraLarge};
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;

export const TextButton = styled.button`
  font-size: ${({ theme }) => theme.font.size.medium};
  font-family: ${({ theme }) => theme.font.family};
  color: ${({ theme }) => theme.colors.primaryText};
  &:hover {
    color: ${({ theme }) => theme.colors.textHover};
  }
`;