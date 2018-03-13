import { drawUniverse, shootNewStar } from './animation';
import { createNewStreamOfTransactions, getNonZeroAmountsFromOperations } from './stellar';
import { playBackgroundSounds, playNote } from './sound';

import './index.css';

drawUniverse();
playBackgroundSounds();

const transactions = [];
createNewStreamOfTransactions((response) => {
    transactions.push(response);
    const opsAmounts = getNonZeroAmountsFromOperations(response);
    console.log('opsAmounts', opsAmounts);
});

window.setInterval(() => {
    const shouldUpdate = Math.random() > 0.5;

    if (shouldUpdate && transactions.length > 0) {
        console.log(transactions.pop());
        shootNewStar();
        playNote();
    }
}, 250)
