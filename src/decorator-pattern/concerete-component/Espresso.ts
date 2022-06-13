import { Beverage } from '../component/Beverage';

export class Espresso extends Beverage {
  constructor() {
    super();
    this.description = 'Espresso';
  }
  cost(): number {
    return 10;
  }
}
