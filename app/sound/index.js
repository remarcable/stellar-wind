import LeadSynth from './instruments/lead';
import { playWind } from './instruments/wind';
import { startMusicAfterLoad } from './background-music';

import { scale, MAX_NOTE_HEIGHT } from './constants';

export function playBackgroundSounds() {
    playWind();
    startMusicAfterLoad();
}

export function playNote(noteHeight) {
    const noteName = noteHeightToNoteName(noteHeight);
    const noteLength = Math.random() > 0.5 ? '16n' : '8n';
    LeadSynth.triggerAttackRelease(noteName, noteLength);
}

function noteHeightToNoteName(noteHeight) {
    return scale[noteHeight];
}

export function playRandomNote() {
    const noteHeight = Math.floor(Math.random() * MAX_NOTE_HEIGHT);
    playNote(noteHeight);
}
