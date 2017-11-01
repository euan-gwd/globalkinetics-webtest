import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> Sanity Test', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
