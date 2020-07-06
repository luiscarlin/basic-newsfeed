import React, { FunctionComponent } from 'react';
import { CardContainer } from '../containers/Card.container';
import { Post } from '../models/post.model';

export interface FeedProps {
  posts: Post[];
}

export const Feed: FunctionComponent<FeedProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post, index) => {
        return <CardContainer key={index} id={post.id} />;
      })}
    </>
  );
};
