// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];

  while (arr.length > 1) {
    const node = arr.shift();

    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      arr.push(...node.children);
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;

// // My original solution
// function levelWidth(root) {
//   // Initialize arrays for a counter, the counter position and 
//   // the current level of nodes
//   const counter = [0];
//   let counterPos = 0;
//   // The array for the node levels starts with the root by default
//   // along with a stopper value
//   const arr = [root, 's'];

//   // Loop through the tree at each node until only the stopper element
//   // is left
//   while(arr.length > 1) {
//       // Take out the first array element 
//       const node = arr.shift();
//       if(node === 's') {
//           // An if statement will check if the array element matches
//           // the stopper which will start a new index in the counter
//           // array to count the new level.
//           counterPos++;
//           counter[counterPos] = 0;
//           arr.push(node);
//       } else {
//           // If not, the counter will increment at its current spot
//           // Store the array element's children into the array as their
//           // own values
//           counter[counterPos]++;
//           arr.push(...node.children);
//       }
//   }

//   // Return the counter array
//   return counter;
// }

// function levelWidth(root) {
//   // Set the array to store the counters, starting with 0
//   const counters = [0];
//   // Set the array to store the nodes, starting with the root
//   // and a stopper element
//   const arr = [root, 's'];

//   // Loop through the array to count the nodes at a given level
//   while(arr.length > 1) {
//       // Take the first element in the array out and into a variable
//       const node = arr.shift();

//       // Check if the value pulled was the stopper element
//       if(node === 's') {
//           // Push a new element into the counters array with an initial
//           // value of 0 and push the stopper element back into the node
//           // array at the end position
//           counters.push(0);
//           arr.push('s');
//       } else {
//           // Else, push the current node's children into the end of the array
//           // and increment the last element in the counter array
//           arr.push(...node.children);
//           counters[counters.length - 1]++;
//       }
//   }

//   // Return the counters variable when all nodes have been looped through
//   return counters;
// }