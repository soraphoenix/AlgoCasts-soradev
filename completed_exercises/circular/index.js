// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
}

module.exports = circular;

// // My original solution
// function circular(list) {
//   // Set the variables to traverse nodes at different speeds
//   let slow = list.head;
//   let fast = list.head.next.next;

//   // Loop through the list while the variables are not equal to each
//   // other, while checking for a node with a next property of null
//   while(slow !== fast) {
//       // Create a conditional that will check if at least one of 
//       // the variables contains a null value in their next property
//       // This would mean that the loop has an end and isn't circular
//       if(!slow.next || !fast.next) {
//           return false;
//       }

//       // Increment the variables for the next iteration
//       slow = slow.next;
//       fast = fast.next.next;
//   }
      
//   // Return true if otherwise, as the while loop has stopped due to
//   // both nodes having the same value
//   return true;
// }

// function circular(list) {
//   // Set the variables to traverse nodes at different speeds
//   let slow = list.head;
//   let fast = list.head.next.next;

//   // Loop through the list while the fast variable has a two next 
//   // values, while checking if the nodes at both variables match
//   while(fast.next && fast.next.next) {
//       // Increment the variables at their respective speeds
//       slow = slow.next;
//       fast = fast.next.next;

//       if(slow === fast) {
//           // Return a true value if the variables match, 
//           // confirming a circular list
//           return true;
//       }
//   }

//   // Return a false value if otherwise as the while loop condition
//   // stops if there is an end to the linked list
//   return false;
// }