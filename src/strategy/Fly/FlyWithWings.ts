import { FlyBehaviour } from './IFlyBehavior';

export class FlyWithWing implements FlyBehaviour {
  fly(): void {
    console.log("I'm flying with wings.");
  }
}
