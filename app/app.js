import { drawUniverse, shootNewStar } from './animation';
import { createStreamOfNormalizedTransactions } from './stellar';
import { getAverage } from './helpers';
import { MAX_NOTE_HEIGHT } from './sound/constants';
import {
    playNote,
    playRandomNote,
    playBackgroundSounds,
} from './sound';

import './index.css';


let normalizedTransactionAmounts = [];
createStreamOfNormalizedTransactions({
    normalizationScale: MAX_NOTE_HEIGHT,
    callback: (newValue) => {
        // don't store duplicate transactions (they don't sound nice)
        if (normalizedTransactionAmounts[normalizedTransactionAmounts.length - 1] !== newValue) {
            normalizedTransactionAmounts.push(newValue);
        }
    }
});


drawUniverse();
playBackgroundSounds();
playAndDisplayTransactions({
    amounts: normalizedTransactionAmounts,
    minimumInterval: 500,
});

function playAndDisplayTransactions({ minimumInterval, amounts }) {
    window.setInterval(function () {
        const shouldProcess = Math.random() > .5; // create feeling of rythm and "realtimeness"
        if (shouldProcess && amounts.length > 0) {
            processNormalizedTransactions(amounts);
        }
    }, minimumInterval);
}

function processNormalizedTransactions(normalizedAmounts) {
    const currentAmount = normalizedAmounts.splice(0, 1)[0]; // get first element and remove it
    if (currentAmount === 1) {
        playRandomNote();
        shootNewStar();
    } else {
        playNote(currentAmount);
        shootNewStar();
    }
}
