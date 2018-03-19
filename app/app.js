import { drawUniverse, shootNewStar } from './animation';
import { createStreamOfNormalizedTransactions } from './stellar';
import { getAverage, Queue } from './helpers';
import { MAX_NOTE_HEIGHT } from './sound/constants';
import {
    playNote,
    playRandomNote,
    playBackgroundSounds,
} from './sound';

import './index.css';


let normalizedTransactionAmounts = new Queue();
createStreamOfNormalizedTransactions({
    normalizationScale: MAX_NOTE_HEIGHT,
    callback: (newValue) => {
        // don't store duplicate transactions (they don't sound nice)
        normalizedTransactionAmounts.enqueueIfNotDuplicate(newValue);
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
        // don't update everytime, but create feeling of rythm and "realtimeness"
        const shouldProcess = Math.random() > .5;
        if (shouldProcess) {
            processNormalizedTransactions(amounts);
        }
    }, minimumInterval);
}

function processNormalizedTransactions(normalizedAmounts) {
    if (!normalizedAmounts.hasItems()) {
        return;
    }

    const currentAmount = normalizedAmounts.dequeue();
    if (currentAmount === 1) {
        playRandomNote();
        shootNewStar();
    } else {
        playNote(currentAmount);
        shootNewStar();
    }
}
