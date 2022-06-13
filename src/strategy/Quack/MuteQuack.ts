import { QuackBehavior } from './IQuackBehavior';

export class MuteQuack implements QuackBehavior {
  quack(): void {
    console.log('__Such Silence__');
  }
}
