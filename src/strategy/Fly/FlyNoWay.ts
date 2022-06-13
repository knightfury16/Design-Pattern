import { FlyBehaviour } from './IFlyBehavior';

export class FlyNoWay implements FlyBehaviour {
  fly(): void {
    console.log("I can't fly.");
  }
}
