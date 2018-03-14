import { playBass } from './bass';
import { playPads } from './pads';

export function startMusic() {
    musicFileLoaded('shouldStart');
}

function playMusic() {
    playBass();
    playPads();
}

const loaded = {
    bass: false,
    pads: false,
    shouldStart: false,
};

export function musicFileLoaded(type) {
    loaded[type] = true;

    if (loaded.bass && loaded.pads && loaded.shouldStart) {
        playMusic();
    }
}
