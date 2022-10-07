import StellarSdk from "stellar-sdk";

const server = new StellarSdk.Server("https://horizon.stellar.org");

function createStreamOfTransactions(callback) {
    const lastCursor = "now";

    server
        .transactions()
        .cursor(lastCursor)
        .stream({
            onmessage: callback,
        });
}

function getNonZeroAmountsFromOperations(transaction) {
    const envelopeXDR = StellarSdk.xdr.TransactionEnvelope.fromXDR(
        transaction.envelope_xdr,
        "base64",
    );

    const operations = envelopeXDR?._value?._attributes?.tx?._attributes?.operations;

    const operationAmounts = [];

    operations.forEach((operation) => {
        const { amount } = operation._attributes.body._value._attributes || {};

        if (amount && amount.low > 0) {
            operationAmounts.push(amount.low);
        }
    });

    return operationAmounts;
}

/* eslint-disable import/prefer-default-export */
export function createStreamOfNormalizedTransactions({ normalizationScale, callback }) {
    let maxOperationAmount = 0;

    createStreamOfTransactions((response) => {
        const txOperationAmounts = getNonZeroAmountsFromOperations(response);
        txOperationAmounts.forEach((amount) => {
            if (amount > maxOperationAmount) {
                maxOperationAmount = amount;
            }

            const normalizedAmount = Math.ceil((amount / maxOperationAmount) * normalizationScale);
            callback(normalizedAmount);
        });
    });
}
