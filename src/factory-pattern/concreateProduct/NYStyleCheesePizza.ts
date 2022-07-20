import { Pizza } from '../productInterface/Pizza';

export class NYStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'NY style sauce and cheese pizza';
    this.dough = 'Thin crust dough';
    this.sauce = 'Marinara Sauce';
    this.toppings.push('Grated Reggiano Cheese');
  }
}
