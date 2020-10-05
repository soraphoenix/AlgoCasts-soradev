// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[undefined, undefined],
//     [undefined, undefined]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // start column
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;

// function matrix(n) {
//   // This problem will seem as though it needs a complex mathematical function in
//   // order to fill in the arrays. This is not true, as the solution involves simply
//   // counting upwards while manually walking around the point of entry in a spiral.
//   // A lot more straightforward than expected.

//   // Initialize the output array
//   let results = [];

//   // Push the subarrays into the output array based on n
//   for(let i = 0; i < n; i++) {
//       results.push([]);
//   }

//   // Set counter
//   let counter = 1;
//   // Set variables to traverse the array set
//   let startRow = 0;
//   let endRow = n-1;
//   let startColumn = 0;
//   let endColumn = n-1;

//   // Set up each loop that will add to the array. This is set up that each entry is stored in
//   // an incremental sequence, where the traversal is in a spiral of a "square" of subarrays
//   while(startRow <= endRow && startColumn <= endColumn) {
//       // Loop through the first subarray
//       for(i = startColumn; i <= endColumn; i++) {
//           // Set the value in the subarray to the value of the counter
//           results[startRow][i] = counter;
//           // Increment the counter on every entry
//           counter++;
//       }
//       // Increment the necessary traversal variable to close off indexes already covered
//       startRow++;

//       // Set values at the end of the rest of the subarrays
//       for(i = startRow; i <= endRow; i++) {
//           // The references for the array location changes with the direction of traversal
//           results[i][endColumn] = counter;
//           counter++;
//       }
//       endColumn--;

//       // Go backwards through the rest of the values in the last subarray
//       for(i = endColumn; i >= startColumn; i--) {
//           results[endRow][i] = counter;
//           counter++;
//       }
//       endRow--;

//       // Go up to the first array index in the next highest subarray
//       for(i = endRow; i >= startRow; i--) {
//           results[i][startColumn] = counter;
//           counter++;
//       }
//       startColumn++;
//   }

//   // Return the completed matrix spiral array
//   return results;
// }