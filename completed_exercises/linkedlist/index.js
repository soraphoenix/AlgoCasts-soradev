// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }

    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }

    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const last = this.getLast();

    if (last) {
      // There are some existing nodes in our chain
      last.next = new Node(data);
    } else {
      // The chain is empty!
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }
    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const previous = this.getAt(index - 1);
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }

  forEach(fn) {
    let node = this.head;
    let counter = 0;
    while (node) {
      fn(node, counter);
      node = node.next;
      counter++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };

// class Node {
//   // This is the only function necessary in the Node class
//   // It stores some data as well as the location of 
//   // the next node
//   // The next property has a default value of null
//   constructor(data, next = null) {
//       this.data = data;
//       this.next = next;
//   }
// }

// class LinkedList {
//   constructor() {
//       this.head = null;
//   }

//   // First attempt. Passed, but may not work in all cases.
//   // insertFirst(data) {
//   // // If the head is null, create a new node with the passed
//   // // data
//   //     if(!this.head) {
//   //         this.head = new Node(data);
//   //     } else {
//   // // Else, place the current head node into a variable and
//   // // create a new node in the head with a reference to the
//   // // variable
//   //         let n1 = this.head;
//   //         this.head = new Node(data, n1);
//   //     }
//   // }

//   insertFirst(data) {
//       // Create a new node in the head while passing the data.
//       // Store any existing data already in the head as the reference
//       // in the newly created node, nesting the existing data.
//       this.head = new Node(data, this.head);
//   }

//   size() {
//       // Set a counter variable and a reference variable to the next
//       // property of the nodes, starting with the head
//       let count = 0;
//       let node = this.head;

//       // Loop through the nodes until a null reference is found while
//       // incrementing the counter variable.
//       // Reassign the node reference on each iteration.
//       while(node) {
//           count++;
//           node = node.next;
//       }

//       // Return the value of the counter
//       return count;
//   }


//   getFirst() {
//       // Return the data in the head of the list
//       return this.head;
//   }

//   // // My original solution
//   // getLast() {
//   //     // Set a variable to track the current node in the loop
//   //     let node = this.head;

//   //     // Loop through the list until the next node reference is null,
//   //     // then return the related node
//   //     while(node) {
//   //         if(node.next) {
//   //             node = node.next;
//   //         } else {
//   //             return node;
//   //         }
//   //     }
//   // }

//   getLast() {
//       // Set a case where there is no node
//       if(!this.head) {
//           return null;
//       }

//       // Set a reference to the current node being looked at, starting
//       // with the head
//       let node = this.head;

//       // Loop through the list until the next node reference is null,
//       // then return the related node
//       while(node) {
//           // Return the current node if it's next property is null,
//           // meaning it's the tail (last node in the list)
//           if(!node.next) {
//               return node;
//           }

//           // Assign to the node variable the next node to iterate through
//           node = node.next;
//       }
//   }

//   clear() {
//       // Set the head to null, clearing the linked list of any
//       // Node references
//       return this.head = null;
//   }

//   // My original solution
//   // removeFirst() {
//   //     // Create a conditional that will set the head to equal the second
//   //     // node if the head's next variable isn't null
//   //     if(this.head.next) {
//   //         // Set the head to the second node
//   //         this.head = this.head.next;
//   //     } else {
//   //         // Set the head to null if there are no other nodes
//   //         this.head = null;
//   //     }
//   // }

//   removeFirst() {
//       // Create a case to return if the head is already empty
//       if(!this.head) {
//           return;
//       }

//       // Set the head to the second node otherwise
//       this.head = this.head.next;
//   }

//   // // My original solution
//   // removeLast() {
//   //     // Set variables to track the previous node checked, starting with
//   //     // the head
//   //     let last = this.head;
      
//   //     // Return null if the head itself is null
//   //     if(!this.head) {
//   //         return null;
//   //     }

//   //     // Assign a variable to the current node to be checked
//   //     let node = this.head.next;

//   //     // Check if the next property of the head is null and if so, set the head
//   //     // itself to null
//   //     if(this.head.next === null) {
//   //         return this.head = this.head.next;
//   //     } else {
//   //         // Loop through the nodes to find the last node
//   //         while(node) {
//   //             // Conditional to check if there is a node, and if so to check the
//   //             // current one to see if it's the last one
//   //             if(!last.next || this.head === null) {
//   //                 // Set the reference on the previous node to null, or the current one
//   //                 // to null if it is the only node
//   //                 return this.head = null;
//   //             } else if(node.next === null) {
//   //                 // Set the next property on the last node to null if the current 
//   //                 // node's next property is null
//   //                 return last.next = null;
//   //             } else {
//   //                 // Reassign the next properties on both node references to their next
//   //                 // respective node
//   //                 last = last.next;
//   //                 node = node.next;
//   //             }
//   //         }
//   //     }
//   // }

//   removeLast() {
//       // Return a null value if the head is empty
//       if(!this.head) {
//           return null;
//       }

//       // Set the head value to null if there is only 1 node
//       if(this.head.next === null) {
//           this.head = null;
//           return;
//       }

//       // If the first 2 conditions aren't met, set variables for the previous node
//       // and the next one, starting with the head
//       let previous = this.head;
//       let node = this.head.next;

//       // Iterate through a while loop to set the variables to the value of the next  
//       // respective node until the variables are set to the last two nodes.
//       while(node.next) {
//           previous = node;
//           node = node.next;
//       }

//       // Set the previous node's next property to null
//       previous.next = null;
//   }

//   // // My original solution
//   // insertLast(data) {
//   //     // If the head is empty, assign the new node to the head
//   //     if(!this.head) {
//   //         this.head = new Node(data);
//   //     } else {
//   //         // Else, the getLast function can be used to reference the next
//   //         // property of the last node to insert the new node there
//   //         this.getLast().next = new Node(data);
//   //     }
//   // }

//   insertLast(data) {
//       // Set a variable to get the last node in the list
//       const last = this.getLast();

//       // Create a conditional to set the next property of the last node to the
//       // new node, or set the head to the new node if it is empty
//       if(last) {
//           last.next = new Node(data);
//       } else {
//           this.head = new Node(data);
//       }
//   }

//   // // My original solution
//   // getAt(index) {
//   //     // Set a counter variable and a variable to track the current node,
//   //     // starting with the head
//   //     let counter = 0;
//   //     let node = this.head;

//   //     // If there is no head, return a null value
//   //     if(!this.head) {
//   //         return null;
//   //     }

//   //     // While the counter is less than or equal to the requested index,
//   //     // check if the counter is equal to the index at every iteration.
//   //     // Return the current node when this is true.
//   //     while(counter <= index) {
//   //         if(counter === index) {
//   //             return node;
//   //         } else {
//   //             // Else, set the node to the next one in the list and
//   //             // increment the counter variable
//   //             node = node.next;
//   //             counter++;
//   //         }
//   //     }
//   // }

//   getAt(index) {
//       // Set the variables for a counter and node reference
//       let counter = 0;
//       let node = this.head;

//       // Loop through each node until the counter is equal to the requested
//       // index.
//       while(node) {
//           if(counter === index) {
//               // Return the current node if the condition is met
//               return node;
//           }

//           // Else, increment the counter and set the node variable to the 
//           // next node
//           counter++;
//           node = node.next;
//       }

//       // Return a null value if the while loop is finished with no result.
//       // This satisfies the case of an empty head and a requested index
//       // That is out of bounds for the linked list.
//       return null;
//   }

//   // // My original solution
//   // removeAt(index) {
//   //     // Return a null value if the list is empty
//   //     if(!this.head) {
//   //         return null;
//   //     }

//   //     // Replace the head with the next property if removing the first
//   //     // node in the list
//   //     // Works whether the list has only one node or multiple nodes
//   //     if(index === 0) {
//   //         return this.head = this.head.next;
//   //     }


//   //     // If the node exists, replace the next property of the previous 
//   //     // node with the next property of the node being operated on
//   //     // Works in the middle of the node as well as at the end
//   //     if(this.getAt(index)) {
//   //         return this.getAt(index-1).next = this.getAt(index).next;
//   //     } else {
//   //         // Return null if a node at the stated index doesn't exist
//   //         return null;
//   //     }
//   // }

//   removeAt(index) {
//       // Return the function here if the head is empty
//       if(!this.head) {
//           return;
//       }

//       // Replace the head with the next property if removing the first
//       // node in the list
//       // Works whether the list has only one node or multiple nodes
//       if(index === 0) {
//           return this.head = this.head.next;
//       }
      
//       // Set a variable that contains the previous node. Use the getAt
//       // function to use find it.
//       const previous = this.getAt(index-1);
//       // Use a conditional to check if the requested index is out of
//       // bounds. Checks for a previous node or if the previous node
//       // has a next property that is null
//       if(!previous || !previous.next) {
//           return;
//       }

//       // Set the previous node's next property to the next property of
//       // the node to be removed
//       previous.next = previous.next.next;
//   }

//   // My original solution
//   insertAt(data, index) {
//       // If the list is empty, create a new node at the head with the
//       // data being passed
//       if(!this.head) {
//           return this.head = new Node(data);
//       }

//       // If inserting at the head, create a new node at the head with the
//       // passed data while setting the current node at the head as the
//       // new node's next property
//       if (index === 0) {
//           return this.head = new Node(data, this.head);
//       }

//       // If the requested index doesn't exist, use the insertLast
//       // function to add the node at the end of the list
//       if(!this.getAt(index)) {
//           return this.insertLast(data);
//       }

//       // If none of the above conditions are met, assign the next property 
//       // of node at the index before the requested one to a new node. The
//       // new node's next property is set to the node that it is replacing.
//       return this.getAt(index-1).next = new Node(data, this.getAt(index));
      
//       // // This code below is my first attempt at the end code above, 
//       // // using variables
//       // let previous = this.getAt(index-1);
//       // let node = new Node(data, this.getAt(index));
//       // return previous.next = node;
//       // // There is also a solution via the course that sets the previous
//       // // variable to: this.getAt(index-1) || this.getLast(), which
//       // // eliminates the need to use an if statement to return via
//       // // insertLast if the index is out of bounds
//   }

//   // My original solution
//   forEach(fn) {
//       // Set the current node being worked on, starting with the head
//       let node = this.head;
//       // Set a counter variable. ** I don't really feel that the counter
//       // is necessary though
//       let counter = 0;

//       // Iterate through the linked list, putting each node 
//       // through the function
//       while(node) {
//           fn(node);
//           // Change the value of the current variable to the next one
//           // in the list
//           node = node.next;
//           // Increment the counter
//           counter++;
//       }
//   }

//   // Generator syntax for iterating through the linked list with a
//   // for of loop
//   // This function will have to be reviewed and broken down later
//   *[Symbol.iterator] () {
//       // Assign the current node, starting with the head
//       let node = this.head;

//       // Loop through the nodes, updating the node reference every
//       // iteration
//       while(node) {
//           // Yield the node for the generator function
//           yield node;
//           node = node.next;
//       }
//   }
// }