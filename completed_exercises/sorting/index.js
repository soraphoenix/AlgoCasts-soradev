// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i+1; j <arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

// // My original solution
// function bubbleSort(arr) {
//   // Initialize the output array as the input array that will be sorted
//   let sorted = arr;
//   // Create a loop that sorts through the array one element at a time,
//   // with a loop that compares that element with every other element
//   for (i = 0; i < sorted.length; i++) {
//     // This loop shortens the length of the array it iterates through
//     // with each iteration of the above loop. The goal is to push the
//     // element in question towards the end of the array as long as it
//     // is the element of higher value. The element of focus changes to
//     // the one of higher value if the current element is lower.
//     for (j = 0; j < sorted.length - i - 1; j++) {
//       // Store the focused element into a temporary variable
//       let temp = sorted[j];
//       // Run a conditional to see if the current element is higher in value
//       // than the next one, and to swap the their places if true
//       if (sorted[j] > sorted[j + 1]) {
//         sorted[j] = sorted[j + 1];
//         sorted[j + 1] = temp;
//       }
//     }
//   }

//   // Return the output array after the loops are finished running
//   return arr;

//   // Worst time complexity: O(n^2) - exponential
// }

// function selectionSort(arr) {
//   // Create a loop that will iterate through the entire array
//   for (i = 0; i < arr.length; i++) {
//     // Set the current index into a variable with the assumption that it is
//     // the lowest value index
//     indexOfMin = i;
//     // Run an inner loop that starts at the index ahead of the current 
//     // one to the end
//     for (j = i + 1; j < arr.length; j++) {
//       // If the index value ahead of the one stored into the stated minimum variable
//       // is of lower value, set the minimum variable to the index further ahead
//       if (arr[j] < arr[indexOfMin]) {
//         indexOfMin = j;
//       }
//     }

//     // If the minimum variable index value is not equal to the index value of the outer
//     // loop, switch values of these indices.
//     if (indexOfMin !== i) {
//       let temp = arr[indexOfMin];
//       arr[indexOfMin] = arr[i];
//       arr[i] = temp;
//     }
//   }

//   // Return the array when looping is complete
//   return arr;

//   // Worst time complexity: O(n^2) - exponential
// }

// function mergeSort(arr) {
//   // Recursive function that calls itself within a return function
//   // nested within another function

//   // Base case: If the input array has only one element, return the array
//   if(arr.length === 1) {
//     return arr;
//   }

//   // Set a variable that will calculate the midpoint index of the input array
//   const center = Math.floor(arr.length / 2);

//   // Split the array in two parts along the center index
//   const left = arr.slice(0, center);
//   const right = arr.slice(center);
  
//   // Return a recursive call the mergesort function again while calling the
//   // merge helper function on the results of those function calls. This
//   // process should continue until the input arrays to the mergeSort function
//   // have only one element each and start returning values for the merge
//   // function to process and eventually return. 
//   return merge(mergeSort(left), mergeSort(right));

//   // Best time complexity: O(n*log(n)) - linearithmic time
// }

// function merge(left, right) {
//     // This is the helper function that does the sorting work
//     // for the mergeSort function. The arrays will be already sorted
//     // due to this function being called via recursion on previous runs.

//     // Initialize an output array
//     const results = [];

//     // Loop while both input arrays have a value
//     while(left.length && right.length) {
//         // If the first index in the left array has a lower value than the  
//         // index on the right, shift the element in the left array into the
//         // output array
//         if(left[0] < right[0]) {
//             results.push(left.shift());
//         } else {
//             // Else, shift the element in the right array into the output array
//             results.push(right.shift());
//         }
//     }

//     // Once either array is out of values, return an array of all remaining 
//     // values in the order of the output array, the left array, then the right
//     // array.
//     return [...results, ...left, ...right];
// }