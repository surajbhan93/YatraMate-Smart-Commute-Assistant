import React, { useEffect, useState } from 'react';

const LocationCard = ({ setCoords }) => {
  const [coords, setLocalCoords] = useState(null);
  const [address, setAddress] = useState("Fetching address...");

  // Function to fetch address using OpenStreetMap
  const fetchAddress = (lat, lng) => {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`)
      .then(res => res.json())
      .then(data => {
        const display = data.display_name || "Address not found";
        setAddress(display);
      })
      .catch(() => setAddress("Unable to fetch address"));
  };

  useEffect(() => {
    // Check if saved coords exist in localStorage
    const saved = localStorage.getItem("lastLocation");
    if (saved) {
      const parsed = JSON.parse(saved);
      setLocalCoords(parsed);
      setCoords(parsed);
      fetchAddress(parsed.lat, parsed.lng);
    }

    // Try to get live GPS location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const current = { lat, lng };
        setLocalCoords(current);
        setCoords(current);

        // Save to localStorage
        localStorage.setItem("lastLocation", JSON.stringify(current));

        fetchAddress(lat, lng);
      },
      () => {
        if (!saved) setAddress("Location access denied");
      }
    );
  }, [setCoords]);

  return (
    <div className="card">
      <h2>📍 Your Location</h2>
      {coords && coords.lat ? (
        <>
          <p><strong>Latitude:</strong> {coords.lat.toFixed(4)}</p>
          <p><strong>Longitude:</strong> {coords.lng.toFixed(4)}</p>
          <p><strong>Address:</strong> {address}</p>
          <a
            href={`https://www.google.com/maps?q=${coords.lat},${coords.lng}`}
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#0ea5e9",
              textDecoration: "underline",
              display: "block",
              marginTop: "8px"
            }}
          >
            📍 View on Google Maps
          </a>
        </>
      ) : (
        <p>{address}</p>
      )}
    </div>
  );
};

export default LocationCard;
