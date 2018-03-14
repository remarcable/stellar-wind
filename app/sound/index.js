import LeadSynth from './lead';
import { playWind } from './wind';
import { startMusic } from './music';



const MAX_NOTE_HEIGHT = 100;
const scale = [
    'Eb3', 'G3', 'Ab3', 'A3', // almost minor pentatonic, but add the Ab for
    'C4', 'D4', 'Eb4', 'G4', 'Ab4', 'A4', // some tension
];

export function playNote(noteHeight) {
    const noteName = noteHeightToNoteName(noteHeight);
    const noteLength = Math.random() > 0.5 ? '16n' : '8n';
    LeadSynth.triggerAttackRelease(noteName, noteLength)
}

function noteHeightToNoteName(noteHeight) {
     const index = Math.floor(scale.length / MAX_NOTE_HEIGHT * noteHeight);
     return scale[index];
}


export function playBackgroundSounds() {
    playWind();
    startMusic();
}
