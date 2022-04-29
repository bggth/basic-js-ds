const { NotImplementedError } = require('../extensions/index.js');
const {log} = require('./log');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor (data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    let node = this.root();
    if (node==null) {
      this.rootNode = new Node(data, null, null);
      return;
    }

    let newNode = new Node(data, null, null);

    let prevNode = this.root();
    let nextNode = this.root();
    let cmp = 0;

    while(nextNode != null) {
      prevNode = nextNode;
      cmp = this.compare(data, prevNode.data);
      if (cmp > 0) {
        nextNode = prevNode.right;
      } else if (cmp < 0) {
        nextNode = prevNode.left;
      } else {
        return;
      }
    }

    if (cmp > 0)
      prevNode.right = newNode;
    else
      prevNode.left = newNode;
  }

  has(data) {
    return (this.find(data)!=null);
  }

  find(data) {
    let nextNode = this.root();

    while(nextNode != null) {
      let cmp = this.compare(data, nextNode.data);
      if (cmp>0)
        nextNode = nextNode.right;
      else if (cmp<0)
        nextNode = nextNode.left;
      else
        return nextNode;
    }
    return null;
  }

  remove(data) {
  }

  min() {
    let nextNode = this.root()
    let prevNode = this.root();
    while (nextNode != null) {
      prevNode = nextNode;
      nextNode = nextNode.left;
    }      
    return prevNode.data;
  }

  max() {
    let nextNode = this.root()
    let prevNode = this.root();
    while (nextNode != null) {
      prevNode = nextNode;
      nextNode = nextNode.right;
    }      
    return prevNode.data;
  }

  compare(a, b) {
    let result = 0;
    if (a>b)
      result = 1;
    if (a<b)
      result = -1;
    return result;
  }
}

module.exports = {
  BinarySearchTree
};