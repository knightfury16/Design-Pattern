import { Beverage } from './component/Beverage';
import { Espresso } from './concerete-component/Espresso';
import { Mocha } from './decorator/Mocha';
import { Soy } from './decorator/Soy';

let beverage: Beverage = new Espresso();

console.log(beverage);
beverage = new Mocha(beverage);
console.log(beverage);
beverage = new Soy(beverage);
console.log(beverage);
console.log(`You ordered ${beverage.getDescription()} which cost ${beverage.cost()}`);
