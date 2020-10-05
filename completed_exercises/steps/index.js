// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;

// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';
//
//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//
//     console.log(stair);
//   }
// }

// function steps(num, row = 0, stair = '') {
//   if(row === num) {
//       return;
//   }
  
//   if(stair.length === num) {
//       console.log(stair);
//       return steps(num, row + 1);
//   }
  
//   if(stair.length <= row){
//       stair += '#';
//   } else {
//       stair += ' ';
//   }
  
//   steps(num, row, stair);
// }

// console.log(steps(2));

/* MY FIRST SUCCESSFUL ATTEMPT
function steps(num) {
  // Create a loop for each iteration (i) of a row
  for(i = 0; i < num; i++) {
      // Initialize the variable for the output row
      let stair = '';
      // Initialize the column variable for the loop below
      let col = 0;
      // This loop decides if a # or space should be added to row i
      // The length of the row will always be of argument num
      // characters long
      for (col = 0; col < num; col++) {
          // Function stops printing # based on i current value and
          // adds spaces instead to complete the row
          if(col <= i) {
              stair += '#';
          } else {
              stair += ' ';
          }
          
      }
      // This console log prints once the stair variable is done
      // adding characters and repeats until all iterations with
      // variable i are finished
      console.log(stair);
  }
  
} */

/*   function steps(n) {
    // This solution is nearly identical to my first succesful attempt above
    // The notes in that attempt apply here as well
    for (let row = 0; row < n; row++) {
      let stair = '';
  
      for (let column = 0; column < n; column++) {
        if (column <= row) {
          stair += '#';
        } else {
          stair += ' ';
        }
      }
  
      console.log(stair);
    }
  } */

/* // Recursive solution. Arguments are passed along to be reused
// in the same function as it is called within itself with some
// type of change to the arguments. Only the num argument is 
// Necessary for the function to run.
// End cases are used to stop the loop
function steps(num, row = 0, stair = '') {
  // End case for the entire function. Will end the loop once the 
  // row number is identical to the input number.
  if(row === num) {
      return;
  }
  
  // Inner end case checks if the stair string variable is long
  // enough to be posted
  // Runs the function for the next row (the row argument is updated) 
  // after posting the current one
  if(stair.length === num) {
      console.log(stair);
      return steps(num, row + 1);
  }
  
  // Check the length of the current string to see if a # or space
  // needs to be added
  if(stair.length <= row){
      stair += '#';
  } else {
      stair += ' ';
  }
  
  // Call the function again with updated stair string argument
  steps(num, row, stair);
} */