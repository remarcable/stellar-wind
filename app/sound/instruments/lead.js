import { Synth, Chorus, PingPongDelay, PitchShift } from 'tone';


const delay = new PingPongDelay({
    delayTime: .2,
    maxDelayTime: .3,
}).toMaster();

const pitchShift = new PitchShift({
    pitch: 8,
    wet: .05,
}).connect(delay);

const chorus = new Chorus({
    delayTime: 2,
    wet: .4,
})
.connect(pitchShift)
.toMaster();

export default new Synth({
    oscillator: {
        type: 'sine',
    },
    envelope: {
        attack: .1,
        sustain: .9,
        release: 1,
    },
    volume: -12,
}).connect(chorus);
