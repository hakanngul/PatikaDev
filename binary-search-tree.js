class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    printTree(node = this.root, level = 0) {
        if (node !== null) {
            this.printTree(node.right, level + 1);
            console.log(' '.repeat(level * 4) + node.value);
            this.printTree(node.left, level + 1);
        }
    }
}

const array = [7, 5, 1, 8, 3, 6, 0, 9, 4, 2];
const bst = new BinarySearchTree();

console.log("Binary Search Tree Oluşturma Aşamaları:");
array.forEach(value => {
    bst.insert(value);
    bst.printTree();
    console.log("-----");
});