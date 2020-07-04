import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { NewPostCard } from './NewPostCard';

describe('NewPostCard', () => {
  let onPost;

  beforeEach(() => {
    onPost = jest.fn();

    render(<NewPostCard onPost={onPost} />);
  });

  it('renders an image of Nicholas Cage', () => {
    expect(screen.getByRole('img')).toHaveAttribute('src', 'https://www.placecage.com/300/300');
  });

  it('renders an input box with correct placeholder text', () => {
    expect(screen.getByPlaceholderText('What is on your mind?')).toBeVisible();
  });

  it('renders a post Photo/Video button', () => {
    expect(screen.getByRole('button', { name: 'Photo/Video' })).toBeVisible();
  });

  it('renders a disabled Post It button by default', () => {
    expect(screen.getByRole('button', { name: 'Post It' })).toBeDisabled();
  });

  it('renders an enabled Post It buttoin when a message is entered', () => {
    userEvent.type(screen.getByRole('textbox'), 'my post');

    expect(screen.getByRole('button', { name: 'Post It' })).toBeEnabled();
  });

  it('calls onPost handler with posted message when Post It button is clicked', () => {
    userEvent.type(screen.getByRole('textbox'), 'my post');

    userEvent.click(screen.getByRole('button', { name: 'Post It' }));

    expect(onPost).toHaveBeenCalledWith('my post');
  });

  it('does NOT call onPost handler with posted message when Post It button is clicked while disabled', () => {
    userEvent.click(screen.getByRole('button', { name: 'Post It' }));

    expect(onPost).not.toHaveBeenCalled();
  });
});
