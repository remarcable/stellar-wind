import './index.css';
import { shootNewStar } from './animation';
import { createNewStreamOfTransactions } from './stellar';


drawUniverse();

const transactions = [];
createNewStreamOfTransactions((response) => {
    transactions.push(response);
});

window.setInterval(() => {
    const shouldUpdate = Math.random() > 0.5;

    if (shouldUpdate && transactions.length > 0) {
        console.log(transactions.pop());
        shootNewStar();
    }
}, 250)
