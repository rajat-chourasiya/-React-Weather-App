 # 🌦️ React Weather App (Vite + OpenWeather API)
 ![Screenshot weather](https://github.com/user-attachments/assets/ff630730-a096-44b9-a243-3982d154a480)
A clean and responsive **weather forecast app** built with **React + Vite**. This app fetches real-time weather data using the OpenWeatherMap API and displays it dynamically based on the user-input city name.

---
## 🚀 Features

✅ Fetch live weather data using the OpenWeatherMap API  
🏙️ Search by city name  
🌡️ Display temperature in Celsius  
🗺️ Shows country, weather condition, and icon  
📡 Loading animation while fetching data  
⚛️ Built using React functional components and Hooks  
⚡ Powered by Vite for faster development

---

## 📁 Project Structure
src/
├── App.css
├── App.jsx
├── main.jsx
├── assets/
│ ├── react.svg
│ ├── loading-3.gif
└── index.html

---

## 🔑 API Key

- This project uses the [OpenWeatherMap API](https://openweathermap.org/api).
- Replace the following line in your code with your own API key:
```js
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`)

---

## 🧠 How It Works
App.jsx
Uses useState to manage:

city: input city name

wDeatils: weather details from API

isLoading: loading spinner visibility

Makes a fetch request to OpenWeatherMap when the form is submitted

Displays weather details like:

City & Country

Temperature (°C)

Weather description

Weather icon (dynamic image from API)

---

🛠️ Tech Stack
React (Hooks)

Vite

JavaScript (ES6)

CSS

---

⚠️ Notes
Make sure you have a valid OpenWeatherMap API key.

Temperature is shown in Celsius by using units=metric in the API request.

If the city name is incorrect or not found, "No Data" is shown.

Loading spinner is visible while fetching the data.

