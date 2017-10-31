import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adaptor() });

describe('<App /> Sanity Test', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });
});
