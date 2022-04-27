import { NYStyleCheesePizza } from "./NYStyleCheesePizza";
import { Pizza } from "./Pizza";
import { PizzaStore } from "./PizzaStore";

export class NYPizzaStore extends PizzaStore{
	
	protected createPizza(type: string): Pizza {
		if(type.toLowerCase() === 'cheese'){
			return new NYStyleCheesePizza();
		}

		return new NYStyleCheesePizza();
	}
	
}