import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

describe('Component Render Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />);
  });

  it('renders without crashing', () => {
    shallow(<CurrentWeather />);
  });

  it('should render the ForecastWeather element', () => {
    expect(wrapper.find(ForecastWeather)).toHaveLength(1);
  });

  it('should render a div element with the css class of current_weather_body', () => {
    expect(wrapper.find('.current_weather_body').exists()).toBe(true);
  });

  it('should render a div element with the css class of current_city', () => {
    expect(wrapper.find('.current_city').exists()).toBe(true);
  });

  it('should render a div element with the css class of current_time', () => {
    expect(wrapper.find('.current_time').exists()).toBe(true);
  });

  it('should render a div element with the css class of container', () => {
    expect(wrapper.find('.container').exists()).toBe(true);
  });

  it('should render a div element with the css class of current_conditions-wrapper', () => {
    expect(wrapper.find('.current_conditions-wrapper').exists()).toBe(true);
  });

  it('should render a div element with the css class of current_conditions', () => {
    expect(wrapper.find('.current_conditions').exists()).toBe(true);
  });

  it('should render an img element with the css class of icon-weather', () => {
    expect(wrapper.find('.icon-weather').exists()).toBe(true);
  });
});
