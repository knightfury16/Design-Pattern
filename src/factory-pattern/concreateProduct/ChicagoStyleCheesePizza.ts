import { Pizza } from '../productInterface/Pizza';

export class ChicagoStyleCheesePizza extends Pizza {
  constructor() {
    super();
    this.name = 'Chicago style cheese pizza';
    this.dough = 'Extra thick crust dough';
    this.sauce = 'Plum tomato sauce';
    this.toppings.push('Shreded Mozzarala Cheese');
  }

  cut(): void {
    console.log('Cutting the pizza into square slices.');
  }
}
