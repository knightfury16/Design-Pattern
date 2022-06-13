import { DecoyDuck } from './ducks/DecoyDuck';
import { Duck } from './ducks/Duck';
import { FlyRocketPowered } from './Fly/FlyRocketPowered';
import { Quack } from './Quack/Quack';

let modelDuck: Duck = new DecoyDuck();

console.log('___default___');
modelDuck.performQuack();
modelDuck.performFly();
modelDuck.setFlyBehavior(new FlyRocketPowered());
modelDuck.setQuackBehavior(new Quack());
console.log('___After setting behavior(Alog)___');
modelDuck.performQuack();
modelDuck.performFly();
