import { QuackBehavior } from './IQuackBehavior';

export class Quack implements QuackBehavior {
  quack(): void {
    console.log('Quack!!');
  }
}
