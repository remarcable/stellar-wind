import { Filter, NoiseSynth, Chorus, Freeverb } from 'tone';

const reverbEffect = new Freeverb({
    roomSize: .3,
    dampening: 1000,
    wet: .2,
}).toMaster();

const chorusEffect = new Chorus({
    frequency: .02,
    delayTime: 8,
    depth: .5,
    feedback: .05,
    wet: .1,
}).connect(reverbEffect);

const cutOffFilter = new Filter({
    type: 'lowpass',
    frequency: 900,
}).connect(chorusEffect);

const whiteNoiseSynth = new NoiseSynth({
    volume: -60,
    envelope: {
        attack: .1,
        sustain: 2,
        release: 2,
    }
}).connect(cutOffFilter);

export default whiteNoiseSynth;
