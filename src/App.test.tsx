import { shallow } from 'enzyme';
import React from 'react';
import { App } from './App';

describe('App', () => {
  it('renders Hello', () => {
    const subject = shallow(<App />);

    expect(subject.text()).toEqual('Hello');
  });
});
