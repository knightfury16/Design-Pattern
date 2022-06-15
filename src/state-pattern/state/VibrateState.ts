import { PhoneSound } from '../PhoneSound';
import { State } from './IState';

export class VibrateState implements State {
  phoneSound: PhoneSound;

  constructor(phoneSound: PhoneSound) {
    this.phoneSound = phoneSound;
  }

  putOnRing(): void {
    console.log('Putting you on ring mode.');
    this.phoneSound.setState(this.phoneSound.getRingState);
  }
  putOnSilent(): void {
    console.log('Putiing you on silent mode.');
    this.phoneSound.setState(this.phoneSound.getSilentState);
  }
  putOnVibrate(): void {
    console.log('Already on vibrate mode.');
  }
}
