import { Subject } from '../subject/ISubject';
import { DisplayElement } from './IDisplayElement';
import { Observer } from './IObserver';

export class ForecastDisplay implements Observer, DisplayElement {
  weatherData: Subject;
  temperature: number;
  humidity: number;
  pressure: number;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.display();
  }
  display(): void {
    console.log(
      `Tommorrow's forecast temperature:${this.temperature}C, humidity:${this.humidity}, pressure:${this.pressure}`
    );
  }
}
