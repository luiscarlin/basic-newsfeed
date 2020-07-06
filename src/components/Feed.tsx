import React from 'react';
import { CardContainer } from '../containers/Card.container';
import { Post } from '../models/post.model';

export interface FeedProps {
  posts: Post[];
}

export const Feed = ({ posts }: FeedProps) => {
  return (
    <>
      {posts.map((post, index) => (
        <CardContainer key={index} id={post.id} />
      ))}
    </>
  );
};
