import { Player, Freeverb } from "tone";
import { requestStartMusic } from "../background-music";
import padsFile from "../../../assets/Pads.mp3";

const reverbEffect = new Freeverb({
    roomSize: 0.9,
    dampening: 10000,
    wet: 0.8,
}).toDestination();

const player = new Player({
    url: padsFile,
    loop: true,
    fadeIn: 5,
    retrigger: true,
    onload() {
        requestStartMusic("padsLoaded");
    },
})
    .connect(reverbEffect)
    .toDestination();

export function playPads() {
    player.volume.value = -18;
    player.start();
}
