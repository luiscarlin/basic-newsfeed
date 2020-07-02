import React from 'react';
import styled from 'styled-components';
import { NewPostCard } from './components/NewPostCard';
import { colors } from './styles/colors';

const Main = styled.main`
  background: ${colors.background};
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const App = () => {
  return (
    <Main>
      <NewPostCard />
    </Main>
  );
};
