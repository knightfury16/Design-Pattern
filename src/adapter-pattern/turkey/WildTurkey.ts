import { Turkey } from './ITurkey';

export class WildTurkey implements Turkey {
  fly(): void {
    console.log("I'm flying a short distance.");
  }
  gobble(): void {
    console.log('Gobble gobble!');
  }
}
