import { Player } from 'tone';
import { musicFileLoaded } from './music';
import bassFile from '../../assets/Bass.mp3';

const player = new Player({
    url: bassFile,
    loop: true,
    fadeIn: 5,
    retrigger: true,
    onload() {
        musicFileLoaded('bass');
    },
}).toMaster();

export function playBass() {
    player.volume.value = -12;
    player.start();
}
