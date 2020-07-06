import React from 'react';
import styled from 'styled-components';
import { FeedContainer } from './containers/Feed.container';
import { NewPostCardContainer } from './containers/NewPostCard.container';
import { colors } from './styles/colors';

const Main = styled.main`
  padding: 5rem;
  background: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const App = () => {
  return (
    <Main>
      <NewPostCardContainer />
      <FeedContainer />
    </Main>
  );
};
