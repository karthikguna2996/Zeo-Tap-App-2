import React, { useState, useEffect } from "react";
import axios from "axios";
import './WeatherApp.css'; // Link your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud, faSun, faCloudRain, faSnowflake } from '@fortawesome/free-solid-svg-icons'; // Import FontAwesome icons

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [alertThreshold, setAlertThreshold] = useState(35); // Default temperature alert threshold in Celsius

  // Function to group weather data by day and calculate aggregates
  const processWeatherData = (dataList) => {
    const dailyData = dataList.reduce((acc, item) => {
      const date = item.dt_txt.split(" ")[0]; // Extracting the date from the timestamp
      if (!acc[date]) {
        acc[date] = [];
      }
      acc[date].push(item);
      return acc;
    }, {});

    const dailySummaries = Object.keys(dailyData).map((date) => {
      const dayData = dailyData[date];

      let totalTemp = 0;
      let minTemp = dayData[0].main.temp_min;
      let maxTemp = dayData[0].main.temp_max;
      let dominantWeather = {};

      dayData.forEach((data) => {
        totalTemp += data.main.temp;
        minTemp = Math.min(minTemp, data.main.temp_min);
        maxTemp = Math.max(maxTemp, data.main.temp_max);

        const weatherMain = data.weather[0].main;
        if (!dominantWeather[weatherMain]) {
          dominantWeather[weatherMain] = 0;
        }
        dominantWeather[weatherMain]++;
      });

      const avgTemp = totalTemp / dayData.length;
      const dominantCondition = Object.keys(dominantWeather).reduce((a, b) =>
        dominantWeather[a] > dominantWeather[b] ? a : b
      );

      return {
        date,
        avgTemp,
        minTemp,
        maxTemp,
        dominantCondition,
      };
    });

    return dailySummaries;
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=e27eb7143ad52f35a26ec4d5cc33f3d7&units=metric`
        );

        const dailySummaries = processWeatherData(response.data.list);
        setWeatherData(dailySummaries);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 5 * 60 * 1000); // Fetch every 5 minutes

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  if (loading) {
    return <div className="loader">Loading...</div>; // Show loading spinner while fetching data
  }

  // Determine background class based on dominant weather condition
  const getBackgroundClass = (condition) => {
    switch (condition) {
      case "Rain":
        return "background-rain";
      case "Snow":
        return "background-snow";
      case "Clear":
        return "background-clear";
      case "Clouds":
        return "background-clouds";
      default:
        return "background-default";
    }
  };

  // Determine the appropriate weather icon
  const getWeatherIcon = (condition) => {
    switch (condition) {
      case "Rain":
        return faCloudRain;
      case "Snow":
        return faSnowflake;
      case "Clear":
        return faSun;
      case "Clouds":
        return faCloud;
      default:
        return faCloud; // Default icon
    }
  };

  return (
    <div className={`weather-app ${getBackgroundClass(weatherData[0]?.dominantCondition)}`}>
      <div className="header">
        <h1>Weather Forecast for Moscow</h1>
        <div className="threshold-input">
          <label>Set Temperature Alert Threshold (°C): </label>
          <input
            type="number"
            value={alertThreshold}
            onChange={(e) => setAlertThreshold(Number(e.target.value))}
            min="0"
            max="50"
          />
        </div>
      </div>

      <div className="daily-summary today">
        <h2>Today's Summary</h2>
        {weatherData[0] && (
          <div className="summary-card">
            <h3>{weatherData[0].date}</h3>
            <FontAwesomeIcon icon={getWeatherIcon(weatherData[0].dominantCondition)} size="2x" />
            <p>Average Temperature: {weatherData[0].avgTemp.toFixed(2)}°C</p>
            <p>Min Temperature: {weatherData[0].minTemp.toFixed(2)}°C</p>
            <p>Max Temperature: {weatherData[0].maxTemp.toFixed(2)}°C</p>
            <p>Dominant Weather: {weatherData[0].dominantCondition}</p>
          </div>
        )}
      </div>

      <div className="weekly-forecast">
        <h2>Weekly Forecast</h2>
        <div className="forecast-grid">
          {weatherData.slice(1, 7).map((day) => (
            <div key={day.date} className="summary-card">
              <h3>{day.date}</h3>
              <FontAwesomeIcon icon={getWeatherIcon(day.dominantCondition)} size="2x" />
              <p>Average Temperature: {day.avgTemp.toFixed(2)}°C</p>
              <p>Min Temperature: {day.minTemp.toFixed(2)}°C</p>
              <p>Max Temperature: {day.maxTemp.toFixed(2)}°C</p>
              <p>Dominant Weather: {day.dominantCondition}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
