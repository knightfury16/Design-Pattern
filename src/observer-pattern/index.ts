import { CurrentConditionDisplay } from './observers/CurrentCondition';
import { ForecastDisplay } from './observers/Forecast';
import { WeatherData } from './subject/WeatherData';

const weatherData = new WeatherData();

const currentDisplay = new CurrentConditionDisplay(weatherData);
const forecastDisplay = new ForecastDisplay(weatherData);

weatherData.setMeasurement(25, 64, 65);
weatherData.removeObserver(currentDisplay);
weatherData.setMeasurement(30, 35, 70);
