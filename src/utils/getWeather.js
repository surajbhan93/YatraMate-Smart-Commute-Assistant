export const getWeather = async (lat, lon) => {
  const API_KEY = "cd969aaa979f4fd939968e54c25f9357"; // Your OpenWeatherMap key
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    console.log("🌍 Weather API data:", data); // Add this for debugging

    return {
      main: data.weather[0].main,
      desc: data.weather[0].description,
      temp: data.main.temp,
      icon: data.weather[0].icon,
      city: data.name || "Unknown",
      country: data.sys?.country || "XX",
    };
  } catch (error) {
    console.error("Error fetching weather:", error);
    return null;
  }
};
