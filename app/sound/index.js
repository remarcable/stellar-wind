import { Synth } from 'tone';

const synth = new Synth().toMaster();

const scale = [
    'C2', 'D2', 'Eb2', 'F2', 'G2', 'Ab2', 'A2', 'B2',
    'C3', 'D3', 'Eb3', 'F3', 'G3', 'Ab3', 'A3', 'B3',
];

const MAX_NOTE_HEIGHT = 100;
window.synth = synth;
console.log(scale);
export function playNote(noteHeight) {
    const note = Math.floor(scale.length / MAX_NOTE_HEIGHT * noteHeight);
    synth.triggerAttackRelease(scale[note], '16n')
}

export function playBackgroundSounds() {
    // ...
}
