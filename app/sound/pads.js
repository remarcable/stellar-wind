import { Player, Freeverb } from 'tone';
import { musicFileLoaded } from './music';
import padsFile from '../../assets/Pads.mp3';

const reverbEffect = new Freeverb({
    roomSize: .9,
    dampening: 10000,
    wet: .8,
}).toMaster();

const player = new Player({
    url: padsFile,
    loop: true,
    fadeIn: 5,
    retrigger: true,
    onload() {
        musicFileLoaded('pads');
    },
})
.connect(reverbEffect)
.toMaster();

export function playPads() {
    player.volume.value = -18;
    player.start();
}

export function padsLoaded() {
    return player.loaded;
}
