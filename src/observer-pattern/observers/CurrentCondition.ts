import { Subject } from '../subject/ISubject';
import { DisplayElement } from './IDisplayElement';
import { Observer } from './IObserver';

export class CurrentConditionDisplay implements Observer, DisplayElement {
  weatherData: Subject;
  temperature: number;
  humidity: number;

  constructor(weatherData: Subject) {
    this.weatherData = weatherData;
    weatherData.registerObserver(this);
  }
  update(temp: number, humidity: number, pressure: number): void {
    this.temperature = temp;
    this.humidity = humidity;
    this.display();
  }
  display(): void {
    console.log(`Current Condition : ${this.temperature}C degrees and ${this.humidity}% humidity`);
  }
}
