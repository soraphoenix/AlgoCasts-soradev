// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  remove() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.pop();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }

  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }

    const record = this.second.peek();

    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }

    return record;
  }
}

module.exports = Queue;

// // This problem is actually asking for the two stacks to be used
// // as the queue. The goal here is to empty the first stack into
// // the second stack, which should be empty. We then are able to pop
// // or reference the top value off of the second stack after which  
// // we place all of the data back into the first stack.
// class Queue {
//   // Construct the two stacks within the Queue class
//   constructor() {
//       this.stackOne = new Stack();
//       this.stackTwo = new Stack();
//   }
  
//   // Add simply adds to the top of the first stack
//   // using its push method
//   add(record) {
//       this.stackOne.push(record);
//   }

//   // Remove involves a bit of logic where all of the entries in
//   // the first stack are added to the second stack. 
//   remove() {
//       // Place the data into the second stack
//       while(this.stackOne.peek()) {
//           this.stackTwo.push(this.stackOne.pop());
//       }

//       // The operation to perform is then done on the second stack
//       // and stored into a variable to be returned later
//       let removed = this.stackTwo.pop();

//       // Place all of the data back into the first stack
//       while(this.stackTwo.peek()) {
//           this.stackOne.push(this.stackTwo.pop());
//       }

//       // Return the fetched data
//       return removed;
//   }

//   // The peek function works nearly identical to the remove
//   // function. The only difference is that the data content is
//   // simply returned instead of being removed from the stack as
//   // well.
//   peek() {
//       while(this.stackOne.peek()) {
//           this.stackTwo.push(this.stackOne.pop());
//       }

//       let peeked = this.stackTwo.peek();

//       while(this.stackTwo.peek()) {
//           this.stackOne.push(this.stackTwo.pop());
//       }

//       return peeked;
//   }
// }