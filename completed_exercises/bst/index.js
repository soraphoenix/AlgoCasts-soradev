// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.
// If the value isn't in the tree return null.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }

    return null;
  }
}

module.exports = Node;

// class Node {
//   // Set the constructor function to include the node's data property as
//   // well as its left and right node properties
//   constructor(data) {
//       this.data = data;
//       this.left = null;
//       this.right = null;
//   }

//   insert(data) {
//       // Recursive function
//       // Check if the data is less than the node in question and if a
//       // node exists at the matching property, then run the function
//       // with that node.
//       if(data < this.data && this.left) {
//           this.left.insert(data);
//       } else if(data < this.data) {
//           // Attempt to insert a node if this property is empty
//           this.left = new Node(data);
//       } else if(data > this.data && this.right) {
//           // Run the same check as above on the right property to determine
//           // if the data is greater than the node and if there's data in
//           // the right property already
//           this.right.insert(data);
//       } else if(data > this.data) {
//           // Attempt to insert a node if this property is empty
//           this.right = new Node(data);
//       }
//   }

//   // // My original solution
//   // contains(data) {
//   //     // If the input data matches the node's data, return the node
//   //     if(data === this.data) {
//   //         return this;
//   //     } else if(this.data === null) {
//   //         // If the node is null, return null. This is pretty much 
//   //         // for the root
//   //         return null;
//   //     } else if(data < this.data && this.left) {
//   //         // If the input data is less than the node, run the function
//   //         // on the left node if it exists.
//   //         // The function call must be returned as a return value is
//   //         // expected.
//   //         return this.left.contains(data);
//   //     } else if(data < this.data) {
//   //         // Return null if not
//   //         return null;
//   //     } else if(data > this.data && this.right) {
//   //         // If the input data is greater than the node, run the function
//   //         // on the right node if it exists
//   //         return this.right.contains(data);
//   //     } else if(data > this.data) {
//   //         // Return null if not
//   //         return null;
//   //     }
//   // }

//   contains(data) {
//       // Return the current node if its data matches the input data
//       if(this.data === data) {
//           return this;
//       }

//       // Check if the input data is either greater or lesser than the data
//       // in the current node, and then return a function call on the
//       // appropriate node.
//       if(this.data < data && this.right) {
//           return this.right.contains(data);
//       } else if(this.data > data && this.left) {
//           return this.left.contains(data);
//       }

//       // Return a null value if no conditions are met
//       return null;
//   }
// }