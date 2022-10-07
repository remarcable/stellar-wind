import { Player } from "tone";
import { requestStartMusic } from "../background-music";
import bassFile from "../../../assets/Bass.mp3";

const player = new Player({
    url: bassFile,
    loop: true,
    fadeIn: 5,
    retrigger: true,
    onload() {
        requestStartMusic("bassLoaded");
    },
}).toMaster();

export function playBass() {
    player.volume.value = -12;
    player.start();
}
