import { drawUniverse, shootNewStar } from './animation';
import { createNewStreamOfTransactions, getNonZeroAmountsFromOperations } from './stellar';
import { MAX_NOTE_HEIGHT } from './sound/constants';
import {
    playBackgroundSounds,
    playNote,
    playRandomNote,
} from './sound';

import './index.css';

drawUniverse();
playBackgroundSounds();

let allAmounts = [];
let operationAmounts = [];
let maxOperationAmount = 0;

const normalizationScale = MAX_NOTE_HEIGHT;

createNewStreamOfTransactions((response) => {
    const txOperationAmounts = getNonZeroAmountsFromOperations(response);
    txOperationAmounts.forEach(amount => {
        operationAmounts.push(amount);
        allAmounts.push(amount);
        if (amount > maxOperationAmount) {
            maxOperationAmount = amount;
        }
    });
});

let lastAmout = 1;
window.setInterval(() => {
    const shouldUpdate = Math.random() > 0.5;

    if (shouldUpdate && operationAmounts.length > 0) {
        let currentAmount = operationAmounts.splice(0, 1)[0]; // get first element and remove it
        while (currentAmount === lastAmout && operationAmounts.length > 0) { // don't repeat the same note again and again
            currentAmount = operationAmounts.splice(0, 1)[0];
        }

        lastAmout = currentAmount;
        const normalizedAmount = Math.ceil((currentAmount / maxOperationAmount) * normalizationScale);

        if (normalizedAmount === 1) { // 1 sounds very boring
            playRandomNote();
        } else {
            playNote(normalizedAmount);
        }

        shootNewStar();
    }
}, 500)


function getAverage(arr) {
    return Math.round(arr.reduce((akk, item) => akk + item, 0) / arr.length)
}
