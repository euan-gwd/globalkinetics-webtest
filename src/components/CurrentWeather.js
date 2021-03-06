import React from 'react';
import windIcon from '../icons/icon-43-wind.svg';
import humidityIcon from '../icons/icon-52-barometer.svg';
import temperatureIcon from '../icons/icon-69-thermometer-half.svg';
import rainIcon from '../icons/icon-rain.svg';
import './CurrentWeather.css';

class CurrentWeather extends React.PureComponent {
  state = {
    city: 'Searching City...',
    currenthumidity: '--',
    currentTemp: '--',
    currentFeels: '--',
    currentWind: '--',
    currentCondition: '',
    currentIcon: '',
    currentRain: '--',
    loaded: false
  }; //Initial State

  handleRefresh = () => {
    window.location.reload();
  };

  async getCurrentWeather(coords) {
    const pos_lat = coords.latitude;
    const pos_lon = coords.longitude;

    const fetchWeatherData = async (lat, lon) => {
      const url = `https://api.wunderground.com/api/a856679be7a8710b/conditions/q/${lat},${lon}.json`;
      const response = await fetch(url);
      const body = await response.json();
      if (response.status !== 200) {
        throw Error(body.message);
      }
      return body;
    };

    fetchWeatherData(pos_lat, pos_lon)
      .then(res => {
        const weatherData = res.current_observation;
        const currentTemp = `${weatherData.temp_c}°C / ${weatherData.temp_f}°F`;
        const currentFeels = `Feels: ${weatherData.feelslike_c}°C / ${weatherData.feelslike_f}°F`;
        const icon = `${weatherData.icon}.svg`;
        const iconUrl = require(`../icons/${icon}`);
        const windSpeedKPH = `${weatherData.wind_kph} kph`;
        const windSpeedMPH = `${weatherData.wind_mph} mph`;
        const windDirection = weatherData.wind_dir;
        const currentWind = `${windSpeedKPH} / ${windSpeedMPH} from the ${windDirection}`;
        const rainTodayImperial = `${weatherData.precip_today_in}in `;
        const rainTodayMetric = `${weatherData.precip_today_metric} mm`;
        const currentRain = `${rainTodayMetric} / ${rainTodayImperial}`;
        this.setState({
          city: weatherData.display_location.city,
          currenthumidity: weatherData.relative_humidity,
          currentTemp: currentTemp,
          currentFeels: currentFeels,
          currentWind: currentWind,
          currentCondition: weatherData.weather,
          currentIcon: iconUrl,
          currentRain: currentRain,
          currentTime: weatherData.observation_time,
          loaded: true
        });
      })
      .catch(err => {
        alert('Fetch failed', err, err.message);
      });
  } //end getLocalWeather

  getPosition = () => {
    const options = {
      enableHighAccuracy: true,
      timeout: 30000,
      maximumAge: 60000
    };

    const success = pos => {
      let coords = pos.coords;
      this.getCurrentWeather(coords);
    };

    const error = err => {
      alert(`ERROR(${err.code}): ${err.message}`);
    };

    window.navigator.geolocation.getCurrentPosition(success, error, options);
  }; //end getGeoPosition

  componentWillMount() {
    if (navigator.geolocation) {
      this.getPosition();
    } else {
      alert('Your browser does not support Geolocation!');
    }
  } //end componentWillMount

  render() {
    return (
      <div className="current_weather_body">
        <div className="current_city">{this.state.city}</div>
        <div className="current_time">{this.state.currentTime}</div>
        {this.state.loaded && (
          <button className="update_btn" onClick={this.handleRefresh}>
            Update
          </button>
        )}
        {this.state.loaded ? (
          <div className="container">
            <div className="current_conditions-wrapper">
              <img src={this.state.currentIcon} alt={this.state.currentIcon} className="current-weather_icon" />
              <div className="current_conditions">{this.state.currentCondition}</div>
            </div>
            <div className="temperature-wrapper">
              <img src={temperatureIcon} alt="temperature icon" className="temperature_icon" />
              <div className="temperature">{this.state.currentTemp}</div>
            </div>
            <div className="feels_like">{this.state.currentFeels}</div>
            <div className="wind-wrapper">
              <img src={windIcon} alt="wind icon" className="wind_icon" />
              <div className="wind">{this.state.currentWind}</div>
            </div>
            <div className="rain-wrapper">
              <img src={rainIcon} alt="rain icon" className="rain_icon" />
              <div className="rain">
                {this.state.currentRain}
                expected
              </div>
            </div>
            <div className="humidity-wrapper">
              <img src={humidityIcon} alt="humidity icon" className="humidity_icon" />
              <div className="humidity">
                {this.state.currenthumidity}
                % humidity
              </div>
            </div>
          </div>
        ) : (
          <div className="container">
            <div className="loader">Loading...</div>
          </div>
        )}
      </div>
    );
  }
}

export default CurrentWeather;
