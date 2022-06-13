import { FlyNoWay } from '../Fly/FlyNoWay';
import { MuteQuack } from '../Quack/MuteQuack';
import { Duck } from './Duck';

export class DecoyDuck extends Duck {
  constructor() {
    super();
    this.flyBehavior = new FlyNoWay();
    this.quackBehavior = new MuteQuack();
  }

  display(): void {
    console.log("I'm not a real duck!");
  }
}
