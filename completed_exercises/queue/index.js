// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record);
  }

  remove() {
    return this.data.pop();
  }
}

module.exports = Queue;

// // The queue data structure is defined with an ES2015 class
// // This structure restricts the contained array to function as
// // if it is a queue data structure, with only two methods to 
// // manipulate it: 1) add to the end of the array "queue" and
// // 2) remove and return the data at the front of the array "queue."
// class Queue {
//   // Constructor function that will contain the initized array
//   // that contains the data. The constructor function executes any 
//   // time a new object is declared from this class.
//   constructor() {
//       this.data = [];
//   }

//   // Function to add to the beginning of the array
//   add(record) {
//       this.data.unshift(record);
//   }

//   // Function to remove and return the element at the end of
//   // the array
//   remove() {
//       return this.data.pop();
//   }
// }