import React from 'react';
import axios from 'axios';
import FiveDayForecast from './FiveDayForecast';
import './ForecastWeather.css';

class ForecastWeather extends React.Component {
  state = {
    date: '',
    forecastArray: []
  };
  //end inital State

  getWeatherForecast(crd) {
    let pos_lat = crd.latitude;
    let pos_lon = crd.longitude;
    axios
      .get(`https://api.wunderground.com/api/a856679be7a8710b/forecast/q/${pos_lat},${pos_lon}.json`)
      .then(res => {
        const weatherData = res.data.forecast.simpleforecast;
        const forecastData = weatherData.forecastday;
        this.setState({ date: weatherData.date, forecastArray: forecastData });
      })
      .catch(err => {
        console.error('Fetch failed', err, err.message);
      });
  } //end getWeatherForecast

  getGeoPosition = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    };

    const success = pos => {
      let crd = pos.coords;
      this.getLocalWeather(crd);
    };

    const error = err => {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    };

    window.navigator.geolocation.getCurrentPosition(success, error, options);
  }; //end getGeoPosition

  componentWillMount() {
    if (navigator.geolocation) {
      this.getGeoPosition();
    } else {
      alert('Your browser does not support Geolocation!');
    }
  } //end componentWillMount

  render() {
    return (
      <div className="forecast_weather_body">
        <div className="">
          <div className="fct_wrapper">
            {this.state.forecastArray.map((item, index) => {
              return <FiveDayForecast thread={item} key={index} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ForecastWeather;
