import { FlyWithWing } from '../Fly/FlyWithWings';
import { Quack } from '../Quack/Quack';
import { Duck } from './Duck';

export class MallordDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyWithWing();
    this.quackBehavior = new Quack();
  }
  display(): void {
    console.log("I'm a real mallord duck!");
  }
}
