import { Beverage } from '../component/Beverage';

export abstract class CondimentDecorator extends Beverage {
  abstract getDescription(): string;
}
