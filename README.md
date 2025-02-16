# Climate

A simple and intuitive weather application built with Angular that utilizes the OpenWeatherMap API to provide real-time weather data for any city.
![alt text](docs/print1.png)

## Features
- Search for weather by city name.
- Displays current temperature, humidity, wind speed, and more.
- Responsive and user-friendly interface.

## Technologies Used
- Angular: Front-end framework for building the application.
- OpenWeatherMap API: API used to fetch weather data.
- RxJS: Library for handling asynchronous data streams.
- Font Awesome: For icons.

## Getting Started
Prerequisites
- Node.js (version 20 or later)
- Angular CLI

## Installation
1. Clone the repository
```bash
git clone https://github.com/deyvidsalvatore/WeatherApp.git
```
2. Install the dependencies
```bash
npm install
```
3. Create an account at OpenWeatherMap and generate environment files using ```npx -p @angular/cli@18 ng g environments```:
```bash
apiUrl=https://api.openweathermap.org/data/2.5/weather
apiKey=your_api_key_here
```

4. Run the application
```bash
ng serve
```

Open your browser and navigate to http://localhost:4200. You should see the Climate interface.

## Using the application
1. Enter a city name in the search input.
2. Click the search icon or press Enter.
3. View the current weather information
displayed on the screen.

## Contributing
Contributions are welcome! If you have suggestions or improvements, please create a pull request or open an issue.

## License
This project is licensed under the MIT License.