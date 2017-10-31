import React from 'react';
import ForecastWeather from './ForecastWeather';
import windIcon from '../icons/icon-43-wind.svg';
import humidityIcon from '../icons/icon-52-barometer.svg';
import temperatureIcon from '../icons/icon-69-thermometer-half.svg';
import rainIcon from '../icons/icon-rain.svg';
import './CurrentWeather.css';

class CurrentWeather extends React.PureComponent {
  state = {
    city: 'Searching...',
    currenthumidity: '--',
    currentTemp: 'Fetching Weather...',
    currentFeels: '--',
    currentWind: '--',
    currentCondition: '',
    currentIcon: '',
    currentRain: '--'
  }; //Initial State

  getLocalWeather(crd) {
    let pos_lat = crd.latitude;
    let pos_lon = crd.longitude;
    fetch(`https://api.wunderground.com/api/a856679be7a8710b/conditions/q/${pos_lat},${pos_lon}.json`)
      .then(res => res.json())
      .then(data => {
        let weatherData = data.current_observation;
        let currentTemp = `${weatherData.temp_c}°C / ${weatherData.temp_f}°F`;
        let currentFeels = `Feels: ${weatherData.feelslike_c}°C / ${weatherData.feelslike_f}°F`;
        let icon = `${weatherData.icon}.svg`;
        const iconUrl = require(`../icons/${icon}`);
        let windSpeedKPH = `${weatherData.wind_kph} kph`;
        let windSpeedMPH = `${weatherData.wind_mph} mph`;
        let windDirection = weatherData.wind_dir;
        let currentWind = `${windSpeedKPH} / ${windSpeedMPH} from the ${windDirection}`;
        let rainTodayImperial = `${weatherData.precip_today_in}in `;
        let rainTodayMetric = `${weatherData.precip_today_metric} mm`;
        let currentRain = `${rainTodayMetric} / ${rainTodayImperial}`;
        this.setState({
          city: weatherData.display_location.city,
          currenthumidity: weatherData.relative_humidity,
          currentTemp: currentTemp,
          currentFeels: currentFeels,
          currentWind: currentWind,
          currentCondition: weatherData.weather,
          currentIcon: iconUrl,
          currentRain: currentRain,
          currentTime: weatherData.local_time_rfc822
        });
      })
      .catch(err => {
        console.error('Fetch failed', err, err.message);
      });
  } //end getLocalWeather

  getGeoPosition = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 15000,
      maximumAge: 0
    };

    const success = pos => {
      let crd = pos.coords;
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude: ${crd.longitude}`);
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
      <div className="current_weather_body">
        <div className="current_city">{this.state.city}</div>
        <div className="current_time">As of {this.state.currentTime}</div>
        <div className="container">
          <div className="current_conditions-wrapper">
            <img src={this.state.currentIcon} alt={this.state.currentIcon} className="icon-weather" />
            <div className="current_conditions">{this.state.currentCondition}</div>
          </div>
          <div className="temperature-wrapper">
            <img src={temperatureIcon} alt="temperature icon" className="temperature_icon " />
            <div className="temperature">{this.state.currentTemp || 'Loading'}</div>
          </div>
          <div className="feels_like">{this.state.currentFeels || '--'}</div>
          <div className="wind-wrapper">
            <img src={windIcon} alt="wind icon" />
            <div className="wind">{this.state.currentWind || '--'}</div>
          </div>
          <div className="rain-wrapper">
            <img src={rainIcon} alt="rain icon" />
            <div className="rain-today">
              {this.state.currentRain || '--'}
              expected
            </div>
          </div>
          <div className="humidity-wrapper">
            <img src={humidityIcon} alt="humidity icon" className="humidity_icon" />
            <div className="humidity">
              {this.state.currenthumidity || '--'}
              % humidity
            </div>
          </div>
        </div>
        <ForecastWeather />
      </div>
    );
  }
}

export default CurrentWeather;
