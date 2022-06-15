import { State } from './state/IState';
import { RingState } from './state/RingState';
import { SilentState } from './state/SilentState';
import { VibrateState } from './state/VibrateState';

export class PhoneSound {
  ringState: State;
  silentState: State;
  vibrateState: State;

  state: State;

  constructor() {
    this.ringState = new RingState(this);
    this.silentState = new SilentState(this);
    this.vibrateState = new VibrateState(this);
    this.state = this.ringState;
  }

  public get getRingState(): State {
    return this.ringState;
  }

  public get getSilentState(): State {
    return this.silentState;
  }

  public get getVibrateState(): State {
    return this.vibrateState;
  }

  putOnRing() {
    this.state.putOnRing();
  }

  putOnSilent() {
    this.state.putOnSilent();
  }

  putOnVibrate() {
    this.state.putOnVibrate();
  }

  setState(state: State) {
    this.state = state;
  }
}
