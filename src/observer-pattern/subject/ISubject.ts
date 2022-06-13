import { Observer } from '../observers/IObserver';

export interface Subject {
  registerObserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObserbers(): void;
}
