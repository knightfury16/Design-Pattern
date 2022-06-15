import { PhoneSound } from '../PhoneSound';
import { State } from './IState';

export class SilentState implements State {
  phoneSound: PhoneSound;

  constructor(phoneSound: PhoneSound) {
    this.phoneSound = phoneSound;
  }

  putOnRing(): void {
    console.log('Putting you on ring mode.');
    this.phoneSound.setState(this.phoneSound.getRingState);
  }
  putOnSilent(): void {
    console.log('You already in silent mode.');
  }
  putOnVibrate(): void {
    console.log('Putting you on vibrate mode.');
    this.phoneSound.setState(this.phoneSound.getVibrateState);
  }
}
