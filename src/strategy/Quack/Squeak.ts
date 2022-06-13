import { QuackBehavior } from './IQuackBehavior';

export class Squeak implements QuackBehavior {
  quack(): void {
    console.log('Squeaking!!');
  }
}
