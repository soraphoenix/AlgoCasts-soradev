// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require('./queue');

function weave(sourceOne, sourceTwo) {
  const q = new Queue();

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove());
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove());
    }
  }

  return q;
}

module.exports = weave;

// function weave(sourceOne, sourceTwo) {
//   // Initialize a new class for the weaved queue
//   const q = new Queue();

//   // Loop through the indexes of both queues using the peek function
//   // in the class until no result is returned
//   while (sourceOne.peek() || sourceTwo.peek()) {
//       // Conditional will return a value from the object as long as  
//       // there is one available in its queue. Nothing will be returned
//       // If there are no further values in the queue.
//       if(sourceOne.peek()) {
//           q.add(sourceOne.remove());
//       }

//       // Same conditional as the one right above but for the second queue object
//       if(sourceTwo.peek()) {
//           q.add(sourceTwo.remove());
//       }
//   }

//   // Return the newly weaved queue object
//   return q;
// }