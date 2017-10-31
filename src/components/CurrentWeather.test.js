import React from 'react';
import { configure, shallow } from 'enzyme';
import { XMLHttpRequest } from 'xmlhttprequest';
import Adaptor from 'enzyme-adapter-react-16';
import CurrentWeather from './CurrentWeather';
import ForecastWeather from './ForecastWeather';

configure({ adapter: new Adaptor() });
global.XMLHttpRequest = XMLHttpRequest;

describe('Component Render Tests', () => {
  it('should render the ForecastWeather element', () => {
    const wrapper = shallow(<CurrentWeather />);
    expect(wrapper.find(ForecastWeather)).toHaveLength(1);
  });

  it('should render a div element with the css class of current_weather_body', () => {
    const wrapper = shallow(<div className="current_weather_body" />);
    expect(wrapper.find('.current_weather_body').exists()).toBe(true);
  });

  it('should render a div element with the css class of current_city', () => {
    const wrapper = shallow(<div className="current_city" />);
    expect(wrapper.find('.current_city').exists()).toBe(true);
  });

  it('should render a div element with the css class of current_time', () => {
    const wrapper = shallow(<div className="current_time" />);
    expect(wrapper.find('.current_time').exists()).toBe(true);
  });

  it('should render a div element with the css class of container', () => {
    const wrapper = shallow(<div className="container" />);
    expect(wrapper.find('.container').exists()).toBe(true);
  });
});
