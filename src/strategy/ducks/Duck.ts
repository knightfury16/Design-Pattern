import { FlyBehaviour } from '../Fly/IFlyBehavior';
import { QuackBehavior } from '../Quack/IQuackBehavior';

export abstract class Duck {
  protected flyBehavior: FlyBehaviour;
  protected quackBehavior: QuackBehavior;

  constructor() {}

  abstract display(): void;

  performQuack() {
    this.quackBehavior.quack();
  }
  performFly() {
    this.flyBehavior.fly();
  }

  public setFlyBehavior(fb: FlyBehaviour) {
    this.flyBehavior = fb;
  }
  public setQuackBehavior(qb: QuackBehavior) {
    this.quackBehavior = qb;
  }

  swim() {
    console.log("I'm swiming!");
  }
}
