export abstract class Beverage {
  description: string = 'Unknown beverage';

  getDescription() {
    return this.description;
  }

  abstract cost(): number;
}
