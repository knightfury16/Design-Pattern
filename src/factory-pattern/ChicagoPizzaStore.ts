import { ChicagoStyleCheesePizza } from "./ChicagoStyleCheesePizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class ChicagoPizzaStore extends PizzaStore{

	protected createPizza(type: string): Pizza {
		if(type.toLowerCase() === 'cheese'){
			return new ChicagoStyleCheesePizza();
		}

		return new ChicagoStyleCheesePizza();
	}
}