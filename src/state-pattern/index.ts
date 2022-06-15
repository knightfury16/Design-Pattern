import { PhoneSound } from './PhoneSound';

const phoneSound = new PhoneSound();

console.log(phoneSound.state);

phoneSound.putOnRing();
phoneSound.putOnSilent();
phoneSound.putOnVibrate();
phoneSound.putOnVibrate();
phoneSound.putOnSilent();
phoneSound.putOnRing();
console.log(phoneSound.state);
