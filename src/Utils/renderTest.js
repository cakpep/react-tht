import React from 'react';
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import theme from '../Styles/theme';
import GlobalStyle from '../Styles/global-styles';

export const renderTest = (component) => render(
  <ThemeProvider theme={theme}>
    {component}
    <GlobalStyle />
  </ThemeProvider>
);
