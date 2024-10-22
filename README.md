# WeatherApp

This project is a real-time weather monitoring application built with React. It fetches weather data from the OpenWeatherMap API and displays a summary of the weather for the current day and week. The user can also set a temperature alert threshold to receive notifications when the temperature exceeds the defined limit.

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

The build is minified, and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc.) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point, you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However, we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Features

- Fetches weather data from OpenWeatherMap API.
- Displays daily and weekly weather summaries.
- Allows setting a temperature alert threshold for visual notifications.
- Responsive design for mobile and desktop views.
- Weather icons using FontAwesome.

## Setup and Installation

### 1. Clone the Repository

        git clone https://github.com/karthikguna2996/Zeo-Tap-App-2.git
        cd Zeo-Tap-App-2
    
 
###2.Install the dependencies:
   
        npm install
 
 
###3.Get an OpenWeatherMap API Key Visit (https://openweathermap.org/)  to create an account and get your API key. Once you have it, replace the placeholder API key in WeatherApp.js:

   
     
    const response = await axios.get(
    "http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=YOUR_API_KEY&units=metric");

 
 
###4.Start the development server:

    npm start
The app will be running at http://localhost:3000.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

###Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

###Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

###Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

###Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
