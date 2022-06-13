import { FlyBehaviour } from './IFlyBehavior';

export class FlyRocketPowered implements FlyBehaviour {
  fly(): void {
    console.log("I'm flying with rocket!!");
  }
}
