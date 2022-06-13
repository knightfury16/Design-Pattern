import { Observer } from '../observers/IObserver';
import { Subject } from './ISubject';

export class WeatherData implements Subject {
  observers: Observer[] = [];
  temperature: number;
  humidity: number;
  pressure: number;

  registerObserver(o: Observer): void {
    console.log('\nRegistering a new Observer!\n');
    this.observers.push(o);
  }
  removeObserver(o: Observer): void {
    console.log('\nRemoving a Observer.Hope to see you again!\n');
    const newObservers = this.observers.filter(observer => observer != o);
    this.observers = newObservers;
  }
  notifyObserbers(): void {
    this.observers.forEach(observer =>
      observer.update(this.temperature, this.humidity, this.pressure)
    );
  }

  measurementChanged() {
    console.log('Some data has changed. I better notify all my observers.\n');
    this.notifyObserbers();
  }

  setMeasurement(temp: number, humidity: number, pressure: number) {
    this.temperature = temp;
    this.humidity = humidity;
    this.pressure = pressure;
    this.measurementChanged();
  }
}
