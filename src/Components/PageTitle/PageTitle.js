import React from 'react';
import { TextHeader, Wrapper } from './styles';

const PageTitle = ({ title }) => (
  <Wrapper>
    <TextHeader>
      {title}
    </TextHeader>
  </Wrapper>
);

export default PageTitle;
