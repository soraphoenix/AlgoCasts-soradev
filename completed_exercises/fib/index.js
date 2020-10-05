// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoize(fn) {
  const cache = {};
  return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);

module.exports = fib;

// function fib(n) {
//   const result = [0, 1];
//
//   for (let i = 2; i <= n; i++) {
//     const a = result[i - 1];
//     const b = result[i - 2];
//
//     result.push(a + b);
//   }
//
//   return result[n];
// }

// function fib(n) {
//   // Initialize the output array with the first 2 fibonacci values
//   let output = [0,1];

//   // Loop up until the the position of the input to add previous keys
//   // when making new keys, starting with position 2
//   for(i = 2; i<= n; i++) {
//       output[i] = output[i-1] + output[i-2];
//   }

//   // Return the output at the location of n
//   return output[n];

//   // Estimated runtime complexity: O(n) linear
// }

// // Recursive solution
// // This solution is extremely slow. There is a way to speed this up
// // a lot using memoization.
// function fib(n) {
//   // Set the base case to stop recursion. This approach will continuously
//   // call the function with lower values until n is less than 2, in which
//   // The result will be 0 or 1.
//   if(n < 2) {
//       return n;
//   }
  
//   // Recall the function twice with slightly lower values. All of the
//   // values will be counted toward the final output value
//   return fib(n-1) + fib(n-2);
  
//   // Estimated runtime complexity: O(2^n) exponential
// }

// // Recursive solution including memoization
// // This solution uses a general momoization function to speed up the process.
// function memoize(fn) {
//   // Set an object that contains solutions already found
//   let cache = {};

//   // Function that decides to continue with executing the function
//   // based on the argument being present in the cache object
//   return function(...args) {
//       // Return the result stored in the cache object if it exists
//       if(cache[args]) {
//           return cache[args]
//       }

//       // Store the function with the argument into a variable
//       // in order to save the result into the cache object
//       // with the argument as the key
//       const result = fn.apply(this, args);
//       cache[args] = result;

//       // Return the result after storing it in the cache object
//       return result;
//   }
// }
// // The original recursive solution. Renamed for the sake of readability
// function slowFib(n) {
//   if(n < 2) {
//       return n;
//   }
  
//   return slowFib(n-1) + slowFib(n-2);
// }

// // Assign the main function as a variable that calls it using the
// // memoization function
// fib = memoize(slowFib);

// // Estimated runtime complexity: TBA

// // Original result
// function fib(n) {
//   const result = [0, 1];

//   for(i = 2; i <= n; i++) {
//       result[i] = result[i-1] + result[i-2];
//   }
  
//   return result[n];
// }