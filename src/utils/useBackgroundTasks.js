import { useEffect } from "react";

function useBackgroundTasks(coords, network) {
  useEffect(() => {
    if (!("Notification" in window)) return;

    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }

    const interval = setInterval(() => {
      const hour = new Date().getHours();
      let message = "";

      if (network === "4g" && hour >= 8 && hour <= 10) {
        message = "✅ Good time to leave now!";
      } else if (network === "2g") {
        message = "❌ Poor network. Avoid travelling.";
      } else {
        message = "⚠️ Conditions not ideal. Please wait.";
      }

      // Show notification if allowed
      if (Notification.permission === "granted") {
        new Notification("YatraMate", {
          body: message,
        });
      }

      console.log("[Notification]", message);
    }, 5 * 60 * 1000); // every 5 mins

    return () => clearInterval(interval);
  }, [coords, network]);
}

export default useBackgroundTasks;
