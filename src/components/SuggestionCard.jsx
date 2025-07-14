import React, { useEffect, useState } from 'react';
import './SuggestionCard.css';
import { getWeather } from '../utils/getWeather';

const SuggestionCard = ({ coords, network }) => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const [weather, setWeather] = useState(null);
  const [place, setPlace] = useState("Fetching...");
console.log("🛰️ Received Coords in SuggestionCard:", coords);

  useEffect(() => {
  if (coords.lat && coords.lng) {
    getWeather(coords.lat, coords.lng).then((data) => {
      console.log("🌍 Weather API data:", data);
      setWeather(data);
      if (data?.city && data?.country) {
        setPlace(`${data.city}, ${data.country}`);
      }
    });
  }
}, [coords]);


  let status = "analyzing";
  let title = "🕒 Analyzing...";
  let reason = "Checking your network and location...";
  let tips = "Hang tight, fetching suggestion.";

  if (network && coords.lat) {
    if (weather && (weather.main === "Rain" || weather.main === "Thunderstorm")) {
      status = "bad";
      title = "🌧️ Weather Alert!";
      reason = `Current weather: ${weather.desc}`;
      tips = "Avoid travelling unless urgent.";
    } else if (network === "4g" && currentHour >= 6 && currentHour <= 22) {
      status = "good";
      title = "✅ Good time to leave!";
      reason = "You're on 4G and it's safe travel hours.";
      tips = "Enjoy smooth commute.";
    } else if (network === "2g") {
      status = "bad";
      title = "❌ Poor network detected!";
      reason = "2G is too slow for updates.";
      tips = "Move to better signal.";
    } else {
      status = "wait";
      title = "⚠️ Conditions not ideal.";
      reason = "Weak network or peak hours.";
      tips = "Delay commute if possible.";
    }
  }

  return (
    <div className={`card suggestion-card ${status}`}>
      <h2>{title}</h2>
      <p className="reason">{reason}</p>
      <p className="tips">{tips}</p>
      <p className="timestamp">🕒 Current Time: {currentTime}</p>
      <p className="location">📍 Location: {place}</p>

      {weather && (
        <div className="weather-info">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt={weather.desc}
            width={48}
            height={48}
          />
          <div>
            <p style={{ fontWeight: "bold" }}>
              🌦 {weather.main}, {weather.temp}°C
            </p>
            <p style={{ fontSize: "0.9rem", color: "#555" }}>{weather.desc}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SuggestionCard;
