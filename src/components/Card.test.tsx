import { cleanup, render, screen, within } from '@testing-library/react';
import React from 'react';
import { Card } from './Card';
import { CommentProps } from './Comment';

describe('Card', () => {
  beforeEach(() => {
    render(
      <Card
        photoUrl={'https://fake.pic'}
        name={'Carlos Carlone'}
        location="OH, USA"
        minutesAgo={3}
        postMessage={'this is my post'}
        numberLikes={5}
        numberComments={10}
        comments={[
          {
            photoUrl: 'https://comment.pic',
            minutesAgo: 4,
            name: 'Jose Josefino',
            role: 'Software Developer',
            message: 'some comment',
            numberLikes: 2,
          } as CommentProps,
        ]}
      />,
    );
  });

  it('renders an image with the provided url', () => {
    expect(screen.getByTestId('card-profile-pic')).toHaveAttribute('src', 'https://fake.pic');
  });

  it('renders user name', () => {
    expect(screen.getByText('Carlos Carlone')).toBeVisible();
  });

  it('renders user location', () => {
    expect(screen.getByText('OH, USA')).toBeVisible();
  });

  it('renders time elapsed since post was made in minutes - plural', () => {
    expect(within(screen.getByTestId('card-elapsed-time')).getByText('3 minutes ago')).toBeVisible();
  });

  it('renders time elapsed since post was made in minutes - singular', () => {
    cleanup();
    render(
      <Card
        photoUrl={'https://fake.pic'}
        name={'Carlos Carlone'}
        location="OH, USA"
        minutesAgo={1}
        postMessage={'this is my post'}
        numberLikes={2}
        numberComments={0}
        comments={[]}
      />,
    );

    expect(screen.getByText('1 minute ago')).toBeVisible();
  });

  it('renders ellipsis icon', () => {
    expect(screen.getByTestId('card-ellipsis-icon')).toBeVisible();
  });

  it('renders the post message', () => {
    expect(screen.getByText('this is my post')).toBeVisible();
  });

  it('renders number of likes', () => {
    expect(screen.getByText('5 Likes')).toBeVisible();
  });

  it('renders number of comments', () => {
    expect(screen.getByText('10 Comments')).toBeVisible();
  });

  it('renders a Like button', () => {
    expect(within(screen.getByTestId('card-like-button')).getByText('Like')).toBeVisible();
  });

  it('renders Comment button', () => {
    expect(screen.getByRole('button', { name: 'Comment' })).toBeVisible();
  });

  it('rerders card comments', () => {
    expect(screen.getAllByTestId('comment').length).toEqual(1);
  });
});
