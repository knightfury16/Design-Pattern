import { Beverage } from '../component/Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Soy extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Soy`;
  }

  cost(): number {
    return this.beverage.cost() + 15;
  }
}
