import { shallow } from 'enzyme';
import React from 'react';
import { Card } from './Card';

describe('Card', () => {
  it('has an image from provided url', () => {
    const subject = shallow(<Card photoUrl={'my-pic-url.com'} />);

    expect(subject.find('img').prop('src')).toBe('my-pic-url.com');
  });

  it('has an image from provided url', () => {
    const subject = shallow(<Card photoUrl={'my-pic-url.com'} />);

    expect(subject.find('img').prop('src')).toBe('my-pic-url.com');
  });
});
