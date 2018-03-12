import * as StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
const lastCursor = 'now';

const txHandler = function (txResponse) {
    console.log(txResponse);
};

const es = server.transactions()
    .cursor(lastCursor)
    .stream({
        onmessage: txHandler
    })
