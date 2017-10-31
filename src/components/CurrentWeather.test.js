import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

configure({ adapter: new Adaptor() });

describe('<CurrentWeather/>', () => {
  it('should render the ForecastWeather element', () => {
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper.find(ForecastWeather)).toHaveLength(1);
  });
});
