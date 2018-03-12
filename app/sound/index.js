import { Synth } from 'tone';

const synth = new Synth().toMaster();

export function playNote() {
    synth.triggerAttackRelease('C4', '16n')
}

export function playBackgroundSounds() {
    // ...
}
