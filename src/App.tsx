import React from 'react';
import styled from 'styled-components';
import { colors } from './styles/colors';

const Main = styled.main`
  background: ${colors.background};
  height: 100%;
`;

export const App = () => {
  return <Main>Hello</Main>;
};
