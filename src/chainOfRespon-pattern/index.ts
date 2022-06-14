import { Error } from './concreteHandler/Error';
import { Warning } from './concreteHandler/Warning';

const error = new Error();
const warning = new Warning();

warning.setNext(error);

console.log(warning.handle('div!0'));
