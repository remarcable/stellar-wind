import { Synth } from 'tone';

const synth = new Synth().toMaster();

const scale = [
    'C3', 'D3', 'Eb3', 'G3', 'Ab3', 'A3', // almost minor pentatonic, but add the Ab for
    'C4', 'D4', 'Eb4', 'G4', 'Ab4', 'A4', // some tension
];

const MAX_NOTE_HEIGHT = 100;

export function playNote(noteHeight) {
    const note = Math.floor(scale.length / MAX_NOTE_HEIGHT * noteHeight);
    synth.triggerAttackRelease(scale[note], '16n')
}

export function playBackgroundSounds() {
    // ...
}
