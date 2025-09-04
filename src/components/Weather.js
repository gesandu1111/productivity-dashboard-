import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Weather() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=6.9271&longitude=79.8612&current_weather=true`
        );
        setWeather(response.data.current_weather);
      } catch (error) {
        console.error('Error fetching weather:', error);
      }
    };
    fetchWeather();
  }, []);

  if (!weather) return <p>Loading weather...</p>;

  return (
    <div className="weather">
      <h2>Weather</h2>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Wind Speed: {weather.windspeed} km/h</p>
    </div>
  );
}

export default Weather;
