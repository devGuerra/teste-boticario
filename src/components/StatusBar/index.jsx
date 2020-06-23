import React from 'react';
import { Bar, Container } from './styles';

const DefaulStatusBar = (props) => (
  <Container {...props}>
    <Bar {...props} />
  </Container>
);

export default DefaulStatusBar;
