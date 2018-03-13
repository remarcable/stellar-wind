import * as StellarSdk from 'stellar-sdk';

const server = new StellarSdk.Server('https://horizon.stellar.org');

export function createNewStreamOfTransactions(callback) {
    const lastCursor = 'now';
    
    return server.transactions()
        .cursor(lastCursor)
        .stream({
            onmessage: callback,
        });
}

export function getNonZeroAmountsFromOperations(transaction) {
    const envelopeXDR = StellarSdk.xdr.TransactionEnvelope.fromXDR(transaction.envelope_xdr, 'base64');
    const operations = envelopeXDR._attributes.tx._attributes.operations;

    let operationAmounts = [];

    operations.forEach(operation => {
        const amount = operation._attributes.body._value._attributes.amount;
        if (amount && amount.low > 0) {
            operationAmounts.push(amount.low);
        }
    })

    return operationAmounts;
}
