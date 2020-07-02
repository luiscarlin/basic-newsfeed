import { mount } from 'enzyme';
import React from 'react';
import { NewPostCard } from './NewPostCard';

describe('NewPostCard', () => {
  let subject;

  beforeEach(() => {
    subject = mount(<NewPostCard />);
  });

  it('renders an image of Nicholas Cage', () => {
    expect(subject.find('img').prop('src')).toBe('https://www.placecage.com/50/50');
  });

  it('renders an input field with correct placeholder text', () => {
    expect(subject.find('input').prop('placeholder')).toBe('What is on your mind?');
  });

  it('renders an a button to post Photo/Video', () => {
    expect(subject.find('[data-testid="post-photo-video"]').hostNodes().text()).toBe('Photo/Video');
  });

  it('renders an a button to post a message', () => {
    expect(subject.find('[data-testid="post-message"]').hostNodes().text()).toBe('Post It');
  });
});
