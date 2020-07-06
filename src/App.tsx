import React from 'react';
import styled from 'styled-components';
import { FeedContainer } from './containers/Feed.container';
import { NewPostContainer } from './containers/NewPost.container';
import { colors } from './styles/colors';

const Main = styled.main`
  padding: 5rem;
  background: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

export const App = () => {
  return (
    <Main>
      <NewPostContainer />
      <FeedContainer />
    </Main>
  );
};
