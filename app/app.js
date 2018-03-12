import './index.css';
import { shootNewStar } from './animation';
import { createNewStreamOfTransactions } from './stellar';

const transactions = [];
createNewStreamOfTransactions((response) => {
    transactions.push(response);
});

window.setInterval(() => {
    const shouldUpdate = Math.random() > 0.5;

    if (shouldUpdate && transactions.length > 0) {
        debug(transactions.pop());
        shootNewStar();
    }
}, 250)


const debug = (...args) => {
    console.log(...args);
}
