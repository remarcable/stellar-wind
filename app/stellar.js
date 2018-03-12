import * as StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon.stellar.org');

export function createNewStreamOfTransactions(callback) {
    const lastCursor = 'now';

    const es = server.transactions()
        .cursor(lastCursor)
        .stream({
            onmessage: callback,
        });
}
