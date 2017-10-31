import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

describe('CurrentWeather Component Render Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<CurrentWeather />, { lifecycleExperimental: true });
  });

  it('renders without crashing', () => {
    shallow(<CurrentWeather />);
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

  it('should render an img element with the css class of current-weather_icon', () => {
    const el = shallow(<CurrentWeather />);
    expect(el.find('.current-weather_icon').type()).toEqual('img');
  });

  // it('should render an img element with the css class of current-weather_icon', () => {
  //   expect(wrapper.find('.current-weather_icon').exists()).toBe(true);
  // });

  it('should render a div element with the css class of current_conditions', () => {
    expect(wrapper.find('.current_conditions').exists()).toBe(true);
  });

  it('should render a div element with the css class of temperature-wrapper', () => {
    expect(wrapper.find('.temperature-wrapper').exists()).toBe(true);
  });

  it('should render an img element with the css class of temperature_icon', () => {
    expect(wrapper.find('.temperature_icon').exists()).toBe(true);
  });

  it('should render a div element with the css class of temperature', () => {
    expect(wrapper.find('.temperature').exists()).toBe(true);
  });

  it('should render a div element with the css class of feels_like', () => {
    expect(wrapper.find('.feels_like').exists()).toBe(true);
  });

  it('should render a div element with the css class of wind-wrapper', () => {
    expect(wrapper.find('.wind-wrapper').exists()).toBe(true);
  });

  it('should render an img element with the css class of wind_icon', () => {
    expect(wrapper.find('.wind_icon').exists()).toBe(true);
  });

  it('should render a div element with the css class of wind', () => {
    expect(wrapper.find('.wind').exists()).toBe(true);
  });

  it('should render a div element with the css class of rain-wrapper', () => {
    expect(wrapper.find('.rain-wrapper').exists()).toBe(true);
  });

  it('should render an img element with the css class of rain_icon', () => {
    expect(wrapper.find('.rain_icon').exists()).toBe(true);
  });

  it('should render a div element with the css class of rain', () => {
    expect(wrapper.find('.rain').exists()).toBe(true);
  });

  it('should render a div element with the css class of humidity-wrapper', () => {
    expect(wrapper.find('.humidity-wrapper').exists()).toBe(true);
  });

  it('should render an img element with the css class of humidity_icon', () => {
    expect(wrapper.find('.humidity_icon').exists()).toBe(true);
  });

  it('should render a div element with the css class of humidity', () => {
    expect(wrapper.find('.humidity').exists()).toBe(true);
  });

  it('should render the ForecastWeather Component', () => {
    expect(wrapper.find(ForecastWeather)).toHaveLength(1);
  });
});
