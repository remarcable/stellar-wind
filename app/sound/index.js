import LeadSynth from './lead';
import { playBass } from './bass';
import { playPads } from './pads';
import { playWind } from './wind';



const MAX_NOTE_HEIGHT = 100;
const scale = [
    'C3', 'D3', 'Eb3', 'G3', 'Ab3', 'A3', // almost minor pentatonic, but add the Ab for
    'C4', 'D4', 'Eb4', 'G4', 'Ab4', 'A4', // some tension
];

export function playNote(noteHeight) {
    const noteName = noteHeightToNoteName(noteHeight);
    LeadSynth.triggerAttackRelease(noteName, '16n')
}

function noteHeightToNoteName(noteHeight) {
     const index = Math.floor(scale.length / MAX_NOTE_HEIGHT * noteHeight);
     return scale[index];
}


export function playBackgroundSounds() {
    playWind();
    setTimeout(() => {
        playBass();
        playPads();
    }, 500)
}
