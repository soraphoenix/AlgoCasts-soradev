// --- Directions
// Given a linked list and integer n, return the element n
// spaces from the last node in the list.  Do not call the
// 'size' method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
  let slow = list.getFirst();
  let fast = list.getFirst();

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast.next) {
    slow = slow.next;
    fast = fast.next;
  }

  return slow;
}

module.exports = fromLast;

// // My original solution
// function fromLast(list, n) {
//   // Set the variables to traverse the nodes
//   let slow = list.head;
//   let fast = list.head;
//   // Move the fast variable ahead in nodes n number of times
//   for(i=0; i<n; i++) {
//       fast = fast.next;
//   }

//   // Loop through the list one node at a time until the end
//   // of the list is reached
//   while(fast.next) {    
//       // Increment the variables for the next iteration
//       slow = slow.next;
//       fast = fast.next;
//   }
//   // Return the slow variable when the while loop finishes
//   return slow;
// }
