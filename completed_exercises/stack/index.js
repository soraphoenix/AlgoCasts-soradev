// --- Directions
// Create a stack data structure.  The stack
// should be a class with methods 'push', 'pop', and
// 'peek'.  Adding an element to the stack should
// store it until it is removed.
// --- Examples
//   const s = new Stack();
//   s.push(1);
//   s.push(2);
//   s.pop(); // returns 2
//   s.pop(); // returns 1

class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}

module.exports = Stack;

// // This is a class that will contain the data to simulate the
// // stack data structure
// class Stack {
//   // The class needs a constructor for the data array
//   constructor() {
//       this.data = [];
//   }

//   // push uses the javascript push method to add to the top of the stack
//   push(record) {
//       this.data.push(record);
//   }

//   // pop uses the javascript pop method to remove and return from the 
//   // top/end of the stack
//   pop() {
//       return this.data.pop();
//   }

//   // peek simply returns the value at the top of the stack without
//   // removing it
//   peek() {
//       return this.data[this.data.length-1];
//   }
// }