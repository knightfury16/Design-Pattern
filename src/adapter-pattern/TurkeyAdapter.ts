import { Duck } from './duck/IDuck';
import { Turkey } from './turkey/ITurkey';

export class TurkeyAdapter implements Duck {
  turkey: Turkey;

  constructor(turkey: Turkey) {
    this.turkey = turkey;
  }

  quack(): void {
    this.turkey.gobble();
  }
  fly(): void {
    this.turkey.fly();
    this.turkey.fly();
  }
}
