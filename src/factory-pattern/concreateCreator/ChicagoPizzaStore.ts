import { ChicagoStyleCheesePizza } from '../concreateProduct/ChicagoStyleCheesePizza';
import { Pizza } from '../productInterface/Pizza';
import { PizzaStore } from '../creatorInterface/PizzaStore';

export class ChicagoPizzaStore extends PizzaStore {
  protected createPizza(type: string): Pizza {
    if (type.toLowerCase() === 'cheese') {
      return new ChicagoStyleCheesePizza();
    }

    return new ChicagoStyleCheesePizza();
  }
}
