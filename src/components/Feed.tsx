import React from 'react';
import { PostContainer } from '../containers/Post.container';
import { Post } from '../models/post.model';

export interface FeedProps {
  posts: Post[];
}

export const Feed = ({ posts }: FeedProps): JSX.Element => {
  return (
    <>
      {posts.map((post, index) => (
        <PostContainer key={index} id={post.id} />
      ))}
    </>
  );
};
