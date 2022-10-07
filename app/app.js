import { context as audioContext } from "tone";
import { drawUniverse, shootNewStar } from "./animation";
import { createStreamOfNormalizedTransactions } from "./stellar";
import { Queue } from "./helpers";
import { MAX_NOTE_HEIGHT } from "./sound/constants";
import { playNote, playRandomNote, playBackgroundSounds } from "./sound";

import "./index.css";

const normalizedTransactionAmounts = new Queue();
createStreamOfNormalizedTransactions({
    normalizationScale: MAX_NOTE_HEIGHT,
    callback: (newValue) => {
        // don't store duplicate transactions (they don't sound nice)
        normalizedTransactionAmounts.enqueueIfNotDuplicate(newValue);
    },
});

drawUniverse();
playBackgroundSounds();
playAndDisplayTransactions({
    amounts: normalizedTransactionAmounts,
    minimumInterval: 500,
});

const playButton = document.getElementById("play-button");

playButton.addEventListener(
    "click",
    () => {
        playButton.className = "hide";
        audioContext.resume();
        window.setTimeout(() => playButton.remove(), 200);
    },
    { once: true },
);

function playAndDisplayTransactions({ minimumInterval, amounts }) {
    window.setInterval(() => {
        // don't update everytime, but create feeling of rythm and "realtimeness"
        const shouldProcess = Math.random() > 0.5;
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
        // a lot of transactions tend to have a normalized value of 1
        // playing the same note again and again sounds boring,
        // we therefore play a random note instead
        playRandomNote();
        shootNewStar();
    } else {
        playNote(currentAmount);
        shootNewStar();
    }
}
