const {NotImplementedError} = require('../extensions/index.js');

const {Node} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {

    constructor() {
        // root of a binary search tree
        this.rootNode = null;
    }

    root() {
        return this.rootNode;
    }

    add(data) {
        this.rootNode = addWithin(this.rootNode, data);

        function addWithin(node, data) {
            if (!node) {
                return new Node(data);
            }

            if (node.data === data) {
                return node;
            }

            if (data < node.data) {
                node.left = addWithin(node.left, data);
            } else {
                node.right = addWithin(node.right, data);
            }
            return node;
        }
    }

    has(data) {
        return searchWith(this.rootNode, data);

        function searchWith(node, data) {
            if (!node) {
                return false;
            }

            if (node.data === data) {
                return true;
            }

            return data < node.data ?
                searchWith(node.left, data) :
                searchWith(node.right, data);
        }
    }

    find(data) {
        return searchWith(this.rootNode, data);

        function searchWith(node, data) {
            if (!node) {
                return null;
            }

            if (node.data === data) {
                return node;
            }

            return data < node.data ?
                searchWith(node.left, data) :
                searchWith(node.right, data);
        }
    }

    remove(data) {
        this.rootNode = removeNode(this.rootNode, data);

        function removeNode(node, data) {
            if (!node) {
                return null;
            }

            if (data < node.data) {
                node.left = removeNode(node.left, data);
                return node;
            } else if (node.data < data) {
                node.right = removeNode(node.right, data);
                return node;
            } else {
                if (!node.left && !node.right) {
                    return null;
                }

                if (!node.left) {
                    node = node.right;
                    return node;
                }

                if (!node.right) {
                    node = node.left;
                    return node;
                }

                let minimumFromRight = node.right;

                while (minimumFromRight.left) {
                    minimumFromRight = minimumFromRight.left;
                }
                node.data = minimumFromRight.data;
                node.right = removeNode(node.right, minimumFromRight.data);
                return node;
            }
        }
    }

    min() {
        if (!this.rootNode) {
            return;
        }

        let node = this.rootNode;
        while (node.left) {
            node = node.left;
        }
        return node.data;
    }

    max() {
        if (!this.rootNode) {
            return;
        }

        let node = this.rootNode;
        while (node.right) {
            node = node.right;
        }
        return node.data;
    }
}

module
    .exports = {
    BinarySearchTree
};