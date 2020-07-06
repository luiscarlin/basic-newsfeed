import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Comment', () => {
  beforeEach(() => {
    render(
      <Comment
        photoUrl={'http://mypic.com'}
        minutesAgo={3}
        name={'Jose Josefino'}
        role={'Software Developer'}
        message={'this is a comment'}
        numberLikes={4}
      />,
    );
  });

  it('renders an image with the provided url', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', 'http://mypic.com');
  });

  it('renders user name', () => {
    expect(screen.getByText('Jose Josefino')).toBeVisible();
  });

  it('renders user role', () => {
    expect(screen.getByText('Software Developer')).toBeVisible();
  });

  it('renders the post message', () => {
    expect(screen.getByText('this is a comment')).toBeVisible();
  });

  it('renders time elapsed since post was made in minutes', () => {
    expect(screen.getByText('3 minutes ago')).toBeVisible();
  });

  it('renders number of likes', () => {
    expect(screen.getByText('4 Likes')).toBeVisible();
  });

  it('renders a Like button', () => {
    expect(screen.getByRole('button', { name: 'Like' })).toBeVisible();
  });

  it('renders an Edit button', () => {
    expect(screen.getByRole('button', { name: 'Edit' })).toBeVisible();
  });

  it('renders a Delete button', () => {
    expect(screen.getByRole('button', { name: 'Delete' })).toBeVisible();
  });
});
