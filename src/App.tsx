import React from 'react';
import styled from 'styled-components';
import { Card } from './components/Card';
import { NewPostCard } from './components/NewPostCard';
import { colors } from './styles/colors';

const Main = styled.main`
  background: ${colors.background};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const App = () => {
  return (
    <Main>
      <NewPostCard onPost={(message) => console.log(message)} />
      <Card
        name={'Carlos Carlone'}
        location="OH, USA"
        minutesAgo={3}
        posttMessage={'Testing the new posts / comments'}
        numberLikes={5}
        numberComments={10}
      />
    </Main>
  );
};
