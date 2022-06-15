import { Duck } from './duck/IDuck';
import { MallorodDuck } from './duck/MallordDuck';
import { Turkey } from './turkey/ITurkey';
import { WildTurkey } from './turkey/WildTurkey';
import { TurkeyAdapter } from './TurkeyAdapter';

const testDuck = (duck: Duck) => {
  duck.quack();
  duck.fly();
};

const mallordDuck: Duck = new MallorodDuck();

const wildTurkey: Turkey = new WildTurkey();
const turkeyAdapter: Duck = new TurkeyAdapter(wildTurkey);

console.log('The turkey says:...');
wildTurkey.gobble();
wildTurkey.fly();

console.log('The Duck says:...');
testDuck(mallordDuck);

console.log('The turkey adapter says:...');
testDuck(turkeyAdapter);
