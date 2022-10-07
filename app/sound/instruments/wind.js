import { Filter, NoiseSynth, Chorus, Freeverb } from "tone";

const reverbEffect = new Freeverb({
    roomSize: 0.3,
    dampening: 1000,
    wet: 0.2,
}).toDestination();

const chorusEffect = new Chorus({
    frequency: 0.02,
    delayTime: 8,
    depth: 0.5,
    feedback: 0.05,
    wet: 0.1,
}).connect(reverbEffect);

const cutOffFilter = new Filter({
    type: "lowpass",
    frequency: 900,
}).connect(chorusEffect);

const whiteNoiseSynth = new NoiseSynth({
    volume: -60,
    envelope: {
        attack: 0.1,
        sustain: 1,
        release: 1,
    },
}).connect(cutOffFilter);

export function playWind() {
    whiteNoiseSynth.triggerAttack();
    whiteNoiseSynth.volume.rampTo(-24, 3);
}
