# WeatherApp

This project is a real-time weather monitoring application built with **React**. It fetches weather data from the OpenWeatherMap API and displays daily weather summaries, weekly forecasts, and triggers alerts based on user-defined thresholds.

## Features
- Real-time weather data for specified locations.
- Daily weather summaries with average, minimum, and maximum temperatures.
- Weekly forecast display.
- User-defined temperature alert thresholds.
- Visual indicators for different weather conditions (clear, rain, snow, etc.).
- Periodic updates of weather data every 5 minutes.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing.

### Prerequisites

- **Node.js** (version >= 14.x)
- **npm** (version >= 6.x)

You also need an API key from OpenWeatherMap. [Sign up for a free API key here](https://openweathermap.org/api).

### Installing
1. Clone the repository:

   
       git clone https://github.com/yourusername/weather-app.git
2.Install the dependencies:
   
       cd weather-app
       npm install
 
 
3.Create a .env file in the project root and add your OpenWeatherMap API key:

     
     REACT_APP_API_KEY=your_api_key_here
 
 
4.Start the development server:

     npm start
The app will be running at http://localhost:3000.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
To learn more about testing, visit the testing documentation.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.
The app is ready for deployment.

npm run eject
This is a one-way operation. Once you eject, you can’t go back! This command will remove the single build dependency from your project.

Deployment
You can deploy the build folder to any web server or static hosting service. Follow this guide for more deployment information.

Configuration
OpenWeatherMap API
The weather data is fetched from the OpenWeatherMap API at 5-minute intervals. To change the interval, modify the setInterval function in WeatherApp.js.
Ensure to replace the default API key with your own key in the .env file.
Custom Thresholds
Users can define a temperature alert threshold from the app UI. If the current temperature exceeds this threshold, an alert is triggered and displayed on the screen.
Learn More
To learn more about React, visit the React documentation.

You can also check the Create React App documentation for more insights on the project setup.

Authors
Your Name - https://github.com/karthikguna2996
License
This project is licensed under the MIT License - see the LICENSE file for details.
