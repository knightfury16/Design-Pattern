import { Beverage } from '../component/Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Mocha extends CondimentDecorator {
  beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  getDescription(): string {
    return `${this.beverage.getDescription()}, Mocha`;
  }

  cost(): number {
    return this.beverage.cost() + 5;
  }
}
