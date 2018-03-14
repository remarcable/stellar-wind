import { Player } from 'tone';
import bassFile from '../../assets/Bass.mp3';

const player = new Player({
    url: bassFile,
    loop: true,
    fadeIn: 5,
    retrigger: true,
}).toMaster();

export function playBass() {
    player.volume.value = -12;
    player.start();
}
