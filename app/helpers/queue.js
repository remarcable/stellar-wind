export default class Queue {
    constructor() {
        this.items = [];
    }

    hasItems() {
        return this.items.length > 0;
    }

    enqueue(item) {
        this.items.push(item);
    }

    enqueueIfNotDuplicate(item) {
        if (this.items[this.items.length - 1] !== item) {
            this.enqueue(item);
        }
    }

    dequeue() {
        if (this.hasItems()) {
            return this.items.splice(0, 1)[0];
        }

        throw new Error("Queue: No value to dequeue");
    }
}
