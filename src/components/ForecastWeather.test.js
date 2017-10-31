import React from 'react';
import { shallow } from 'enzyme';
import ForecastWeather from './ForecastWeather';
import FiveDayForecast from './FiveDayForecast';

describe('ForecastWeather Component Render Tests', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ForecastWeather />, { lifecycleExperimental: true });
  });

  it('renders without crashing', () => {
    shallow(<ForecastWeather />);
  });

  it('should render a div element with the css class of forecast_weather_body', () => {
    expect(wrapper.find('.forecast_weather_body').exists()).toBe(true);
  });

  it('should render a div element with the css class of fct_wrapper', () => {
    expect(wrapper.find('.fct_wrapper').exists()).toBe(true);
  });

  it('should render the FiveDayForecast Component', () => {
    expect(wrapper.find(FiveDayForecast)).toHaveLength(1);
  });
});
