import React, { useEffect, useState } from 'react';
import './NetworkCard.css';

const NetworkCard = ({ setNetwork }) => {
  const [networkType, setNetworkType] = useState("Detecting...");
  const [statusClass, setStatusClass] = useState("status detecting");
  const [lastUpdated, setLastUpdated] = useState(null);
  const [signalIcon, setSignalIcon] = useState("📡");

  useEffect(() => {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

    if (connection) {
      const updateNetwork = () => {
        const type = connection.effectiveType;
        setNetworkType(type);
        setNetwork(type);
        setLastUpdated(new Date());

        if (type === "4g") {
          setStatusClass("status good");
          setSignalIcon("📶📶📶");
        } else if (type === "3g") {
          setStatusClass("status medium");
          setSignalIcon("📶📶");
        } else {
          setStatusClass("status poor");
          setSignalIcon("📶");
        }
      };

      updateNetwork(); // Initial check
      connection.addEventListener('change', updateNetwork);

      return () => connection.removeEventListener('change', updateNetwork);
    } else {
      setNetworkType("Not supported");
      setStatusClass("status unknown");
      setSignalIcon("❌");
    }
  }, [setNetwork]);

  return (
    <div className="card network-card">
      <h2>📶 Network Status</h2>
      <p className={statusClass}>
        {signalIcon} Connection: {networkType}
      </p>
      {lastUpdated && (
        <p className="timestamp">🕒 Last updated: {lastUpdated.toLocaleTimeString()}</p>
      )}
      {networkType === "Detecting..." && (
        <div className="pulse-loader" />
      )}
    </div>
  );
};

export default NetworkCard;
