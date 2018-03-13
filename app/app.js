import { drawUniverse, shootNewStar } from './animation';
import { createNewStreamOfTransactions, getNonZeroAmountsFromOperations } from './stellar';
import { playBackgroundSounds, playNote } from './sound';

import './index.css';

drawUniverse();
playBackgroundSounds();

let transactions = [];
let operationAmounts = [];

createNewStreamOfTransactions((response) => {
    transactions.push(response);
    const txOperationAmounts = getNonZeroAmountsFromOperations(response);
    txOperationAmounts.forEach(amount => {
        operationAmounts.push(amount);
    });
});

window.setInterval(() => {
    const shouldUpdate = Math.random() > 0.5;

    if (shouldUpdate && operationAmounts.length > 0) {
        const currentAmount = operationAmounts.pop();
        shootNewStar();
        playNote();
    }
}, 250)
