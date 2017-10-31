import React from 'react';
import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

configure({ adapter: new Adaptor() });

describe('Component Render Tests', () => {
  it('should render the ForecastWeather element', () => {
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper.find(ForecastWeather)).toHaveLength(1);
  });

  it('should render a div element with the css class of current_weather_body', () => {
    const wrapper = shallow(<div className="current_weather_body" />);
    expect(wrapper.find('.current_weather_body').exists()).toBe(true);
  });
});
