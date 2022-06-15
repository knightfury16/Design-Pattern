import { PhoneSound } from '../PhoneSound';
import { State } from './IState';

export class RingState implements State {
  phoneSound: PhoneSound;

  constructor(phoneSound: PhoneSound) {
    this.phoneSound = phoneSound;
  }

  putOnRing(): void {
    console.log('You already in Ring mode.');
  }
  putOnSilent(): void {
    console.log('Putting you on silent mode.');
    this.phoneSound.setState(this.phoneSound.getSilentState);
  }
  putOnVibrate(): void {
    console.log('Putting you on vibrate mode');
    this.phoneSound.setState(this.phoneSound.getVibrateState);
  }
}
