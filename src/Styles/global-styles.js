import { createGlobalStyle } from 'styled-components';
import RobotoRegular from '../Assets/fonts/Roboto-Regular.ttf';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: ${({ theme }) => theme.font.family};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.primaryText};
  }

  @font-face {
    font-family: 'Roboto-Regular';
    src: url(${RobotoRegular});
  }
`;

export default GlobalStyle;
