const {NotImplementedError} = require('../extensions/index.js');

const {ListNode} = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

function removeKFromList(l, k) {
    let firstChain = l;
    let nextElement = l;
    let previousElement;

    do {
        let currentElement = nextElement;
        let value = currentElement.value;
        if (value === k) {
            if (previousElement) { //ne pervii
                previousElement.next = currentElement.next;
                if (currentElement.next === null) {
                    previousElement.next = null;
                }
            }
            if (firstChain === currentElement){ //pervii
                firstChain = currentElement.next;
            }

            nextElement = currentElement.next;
        } else {
            previousElement = currentElement;
            nextElement = currentElement.next;
        }
    }  while (nextElement !== null);

    return firstChain;
}

module.exports = {
    removeKFromList
};


