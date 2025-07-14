# 🧭 YatraMate – Smart Commute Assistant

YatraMate is a real-time smart travel advisor that guides users on the best time to commute based on **live location**, **network strength**, and **weather conditions**. Built using modern Web APIs and React.js, it’s optimized for both user experience and functionality.

---

## 🔗 Live Demo

Clink ([or add your deployment link here](https://yatra-mate-smart-commute-assistant-gamma.vercel.app/))

---

## 📸 Screenshots

| Light Mode | Dark Mode |
|---------<img width="1901" height="863" alt="Screenshot 2025-07-14 202956" src="https://github.com/user-attachments/assets/aa51960f-943e-4ac6-8924-d95a1d08ca78" />
---|-----------|
<img width="1796" height="857" alt="Screenshot 2025-07-14 202940" src="https://github.com/user-attachments/assets/bd27a17c-8d08-456f-b634-f5e1cc773e7a" />
    ---|

## ✨ Features

- 📍 **Live Location Detection** via `Geolocation API`
- 🌐 **Network Strength Analysis** via `Network Information API`
- 🌦 **Live Weather Forecasting** using `OpenWeatherMap API`
- 🔄 **Smart Background Tasks** with `setInterval` logic
- 📬 **Instant Travel Suggestions** (ideal or avoid travel)
- 🎨 **Dark/Light Mode Toggle**
- 🕒 **Last Refreshed Time** and ✅ **Toast Notification**
- 💾 **Saves Last Known Location** to `localStorage`
- 📍 **Reverse Geocoding** using OpenStreetMap API (via CORS proxy)

---

## 🚀 Tech Stack

- **Frontend:** React.js, JavaScript, CSS (with Tailwind or vanilla)
- **APIs Used:**
  - [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
  - [Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)
  - [Background Tasks (setInterval)](https://developer.mozilla.org/en-US/docs/Web/API/setInterval)
  - [OpenWeatherMap API](https://openweathermap.org/api)
  - [Nominatim API](https://nominatim.org/release-docs/develop/api/Reverse/)

---

## 🧠 Logic Summary

- If **Network = 4G** and **Time between 6 AM to 10 PM** ➤ Suggest "✅ Good time to leave!"
- If **Network = 2G** ➤ Warn "❌ Poor network"
- If **Weather = Rain/Thunderstorm** ➤ Suggest "⚠️ Avoid travel"
- Else ➤ Suggest "⚠️ Conditions not ideal"

---

## 📂 Folder Structure
  smart-commute-assistant/
├── public/
├── src/
│ ├── components/
│ │ ├── LocationCard.jsx
│ │ ├── NetworkCard.jsx
│ │ └── SuggestionCard.jsx
│ ├── utils/
│ │ ├── useBackgroundTasks.js
│ │ └── getWeather.js
│ ├── App.js
│ └── App.css
├── package.json
└── README.md


---

## 🛠️ Setup Instructions

1. **Clone the repo:**
   ```bash
   [git clone https://github.com/yourusername/yatramate.git](https://github.com/surajbhan93/YatraMate-Smart-Commute-Assistant.git)
   cd YatraMate-Smart-Commute-Assistant
   npm start



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
