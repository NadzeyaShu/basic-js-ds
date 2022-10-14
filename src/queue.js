const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.firstChain = null;
        this.lastChain = null;
    }

    getUnderlyingList() {
        return this.firstChain;
    }

    enqueue(value) {
        if (!this.firstChain) {
            this.firstChain = new ListNode(value);
            this.lastChain = this.firstChain;
        } else {
            let chain = new ListNode(value);
            this.lastChain.next = chain;
            this.lastChain = chain;
        }
    }

    dequeue() {
        let temp = this.firstChain;
        this.firstChain = this.firstChain.next;
        return temp.value;
    }
}

module.exports = {
    Queue
};
