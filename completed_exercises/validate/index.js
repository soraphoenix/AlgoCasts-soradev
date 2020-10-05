// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }

  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }

  return true;
}

module.exports = validate;

// function validate(node, min = null, max = null) {
//   // Check if the node's data is higher than the max parameter
//   if(max !== null && node.data > max) {
//       return false;
//   }
  
//   // Check if the node's data is lower than the min parameter
//   if(min !== null && node.data < min) {
//       return false;
//   }

//   // Recursively check on the left nodes to see if they will turn
//   // up false. Continue to update the max parameter with the previous node's
//   // data to check against the current node.
//   if(node.left && !validate(node.left, min, node.data)) {
//       return false;
//   } 

//   // Recursively check on the right nodes to see if they will turn
//   // up false. Continue to update the min parameter with the previous node's
//   // data to check against the current node.
//   if(node.right && !validate(node.right, node.data, max)) {
//       return false;
//   } 

//   // Return true if none of the conditions are met
//   return true;
// }