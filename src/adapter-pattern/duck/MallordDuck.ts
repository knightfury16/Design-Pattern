import { Duck } from './IDuck';

export class MallorodDuck implements Duck {
  fly(): void {
    console.log("I'm flying!");
  }
  quack(): void {
    console.log('Quack!');
  }
}
