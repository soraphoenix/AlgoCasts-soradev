// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return chunked;
// }

/* My first attempt
  // Does not work. Will create an infinite loop.
  function chunk(array, size) {

  var before = array;
  var after = [];
  while (before !== []) {
    after.push(before.slice(0, size));
    before.shift();
    before.shift();
  }
  return after;
} */

/* // Does not work in Jest, but it did work in SoloLearn
  // There may be extra output in SoloLearn that I'm not accounting for
  function chunk(array, size) {
    const chunked = [];
    let index = 0;
    
    // The condition on this while loop is the only difference from the
    // legit solution provided above. This is most likely what's
    // causing the problem in Jest.
    while(index <= array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    
    return chunked;
} */

/* function chunk(array, size) {
    // Initialize the output array
    const chunked = [];
    
    // Iterate through each element in the input array
    for(let element of array) {
        // Set a variable to reference the last index in the array
        let last = chunked[chunked.length-1];
        // Set a rule to push to the output array a new subarray if there
        // is no value in the output yet or if the last indexed subarray is
        // full
        if(!last || last.length === size) {
            chunked.push([element]);
        } else {
            // Pushes the element into the subarray if it is not full
            // according to the size argument
            last.push(element);
        }
    }
    
    return chunked;
} */

/*
function chunk(array, size) {
  // Initialize the array that will be chunked
  const chunked = [];
  // Initialize the index to keep up with the index being worked on
  let index = 0;

  // While loop to work through the length of the array
  while (index < array.length) {
    // Each push to the chunked array is a slice of the original
    // array as its own subarray. The slice method makes an array
    // out of the designated position and up to the position stated
    // in the second argument. That position is left out in the
    // current chunk.
    chunked.push(array.slice(index, index + size));
    // The index variable is updated to be re-indexed for the next
    // chunk loop iteration
    index += size;
  }

  return chunked;
}
*/