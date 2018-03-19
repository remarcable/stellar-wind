import { playBass } from './bass';
import { playPads } from './pads';

const soundState = {
    shouldStart: false,
    bassLoaded: false,
    padsLoaded: false,
};


function playBackgroundMusic() {
    playBass();
    playPads();
}

const alterStateAndRequestPlayback = type => startCallback => {
    soundState[type] = true;

    if (soundState.bass && soundState.pads && soundState.shouldStart) {
        startCallback();
    }
}

export const requestStartMusic = alterStateAndRequestPlayback(playBackgroundMusic);

export function startMusicAfterLoad() {
    requestStartMusic('shouldStart');
}
