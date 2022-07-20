import { ChicagoPizzaStore } from './concreateCreator/ChicagoPizzaStore';
import { NYPizzaStore } from './concreateCreator/NYPizzaStore';
import { Pizza } from './productInterface/Pizza';
import { PizzaStore } from './creatorInterface/PizzaStore';

let nyStore: PizzaStore = new NYPizzaStore();
let chicagoStore: PizzaStore = new ChicagoPizzaStore();

// Mat's order
let pizza: Pizza = nyStore.orderPizza('cheese');
console.log('Mat ordered a ' + pizza.getName());

// Joel's order
pizza = chicagoStore.orderPizza('cheese');
console.log('Joel ordered a ' + pizza.getName());
