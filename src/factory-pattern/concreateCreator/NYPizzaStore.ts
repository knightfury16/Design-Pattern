import { NYStyleCheesePizza } from '../concreateProduct/NYStyleCheesePizza';
import { Pizza } from '../productInterface/Pizza';
import { PizzaStore } from '../creatorInterface/PizzaStore';

export class NYPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type.toLowerCase() === 'cheese') {
      return new NYStyleCheesePizza();
    }

    return new NYStyleCheesePizza();
  }
}
