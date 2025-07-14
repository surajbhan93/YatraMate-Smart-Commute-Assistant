import React, { useState, useEffect } from 'react';
import LocationCard from './components/LocationCard';
import NetworkCard from './components/NetworkCard';
import SuggestionCard from './components/SuggestionCard';
import useBackgroundTasks from './utils/useBackgroundTasks';

import './App.css';

function App() {
  const [coords, setCoords] = useState({});
  const [network, setNetwork] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [toastVisible, setToastVisible] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState(null);

  useBackgroundTasks(coords, network);

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("lastLocation");
    if (saved) {
      const parsed = JSON.parse(saved);
      setCoords(parsed);
    }
  }, []);

  const refresh = () => {
    console.log("🔄 Refresh clicked");
    setRefreshing(true);
    setToastVisible(true);

    // Geolocation
    navigator.geolocation.getCurrentPosition((position) => {
      const newCoords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      setCoords(newCoords);
      localStorage.setItem("lastLocation", JSON.stringify(newCoords));
    });

    // Network
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    if (connection) {
      setNetwork(connection.effectiveType);
    }

    // Set last refreshed time
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setLastRefreshed(now);

    setTimeout(() => {
      setRefreshing(false);
      setToastVisible(false);
    }, 2000);
  };

  useEffect(() => {
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <div className={`container ${darkMode ? 'dark-theme' : ''}`}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 className="heading">🧭 YatraMate</h1>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="toggle-btn"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Night Mode'}
        </button>
      </div>

      <p className="subtitle">Your Smart Travel & Commute Advisor</p>

      {/* Refresh Button */}
      <button
        onClick={refresh}
        style={{
          marginBottom: "10px",
          background: refreshing ? "#22c55e" : "#0ea5e9",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
      >
        {refreshing ? "✅ Refreshed!" : "🔄 Refresh Info"}
      </button>

      {/* Last Refreshed Time */}
      {lastRefreshed && (
        <p style={{ fontSize: "0.9rem", marginBottom: "20px", color: darkMode ? "#ccc" : "#333" }}>
          ⏰ Last refreshed at {lastRefreshed}
        </p>
      )}

      {/* Main Grid */}
      <div className="grid">
        <LocationCard setCoords={setCoords} coords={coords} />
        <NetworkCard setNetwork={setNetwork} network={network} />
        <SuggestionCard coords={coords} network={network} />
      </div>

      {/* Toast Snackbar */}
      {toastVisible && (
        <div
          style={{
            backgroundColor: darkMode ? "#1f2937" : "#323232",
            color: "white",
            padding: "12px 20px",
            borderRadius: "8px",
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 999,
            fontSize: "0.95rem",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            animation: "fadeInOut 2s ease",
          }}
        >
          ✅ Data refreshed successfully!
        </div>
      )}
    </div>
  );
}

export default App;
