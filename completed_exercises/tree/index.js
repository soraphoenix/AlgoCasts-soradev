// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.unshift(...node.children);
      fn(node);
    }
  }
}

module.exports = { Tree, Node };

// class Node {
//   // Create a constructor that stores passed in data into the node as
//   // well as an array to store the node's children
//   constructor(data) {
//       this.data = data;
//       this.children = [];
//   }

//   // Add function to store a child node into the current node
//   add(data) {
//       this.children.push(new Node(data));
//   }

//   // Removal function to remove children from the current node
//   remove(data) {
//       // Use a filter function to return the children array without
//       // the node matching the passed in data
//       this.children = this.children.filter(node => {
//           return node.data !== data;
//       })
//   }
// }

// class Tree {
//   // The constructor should create the root, or first node of the tree,
//   // with an initial value of null
//   constructor() {
//       this.root = null;
//   }

//   // Breadth-first traversal function
//   traverseBF(fn) {
//       // Set an array to store nodes, starting with the root
//       const arr = [this.root];
      
//       // Loop through the array while it still has a length, meaning
//       // there are remaining nodes
//       while(arr.length) {
//           // Store the first node in the array into a variable
//           const node = arr.shift();

//           // Push all of the node's children into the array as their
//           // own elements
//           arr.push(...node.children);

//           // Execute the passed in function on the current node
//           fn(node);
//       }
//   }

//   // Depth-first traversal function
//   traverseDF(fn) {
//       // Set an array to store nodes, starting with the root
//       const arr = [this.root];

//       // Loop through the array while it still has a length, meaning 
//       // there are remaining nodes
//       while(arr.length) {
//           // Store the first node in the array into a variable
//           const node = arr.shift();

//           // Store all of the node's children into the array as their
//           // own elements at the beginning of the array
//           arr.unshift(...node.children);

//           // Execute the passed in function on the current node
//           fn(node);
//       }
//   }
// }