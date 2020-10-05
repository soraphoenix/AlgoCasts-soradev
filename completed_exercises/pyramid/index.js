// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

module.exports = pyramid;
//
// function pyramid(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2);
//
//   for (let row = 0; row < n; row++) {
//     let level = '';
//
//     for (let column = 0; column < 2 * n - 1; column++) {
//       if (midpoint - row <= column && midpoint + row >= column) {
//         level += '#';
//       } else {
//         level += ' ';
//       }
//     }
//
//     console.log(level);
//   }
// }

/*
// Pseudocode steps
// Create a case to stop recursion when all rows
// have been printed. Set a new preset parameter for 
// the current row
// Create a case to print the line when it is complete
// and add a new preset parameter for the line
// Recall the function with an increased row value
// Set a new variable to contain the character to be
// added to the line string
// Create a midpoint calculation for each line and 
// store it into a variable
// Use a conditional to decide which character will 
// be added, then recall the function adding the
// character to the line variable

// Recursive solution with preset arguments.
function pyramid(n, row = 0, level = '') {
    // End case if the current row is equal to the argument n
    if(row === n) {
        return;
    }
    
    // The length of the row will be of the calculation below
    // for a pyramid. This statement is an inner end case for the
    // length of a row.
    if(level.length === 2 * n -1) {
        console.log(level);
        // Restarts the function for a new row
        return pyramid(n, row + 1);
    }
    
    // Calculate the point that will be the middle of the row
    // The width of the pyramid will be much higher than the number
    // of the of the input as the # symbols will be in the middle,
    // then spreading out towards the bottom.
    const midpoint = Math.floor((2 * n - 1) / 2);
    // Initialize the variable that will have a value to be added
    // to the current string
    let add;
    
    // Calculate which columns will have a # and which will have a space
    // The calculation is meant to cover areas that fit criteria where
    // the calculated results of this conditional cover a certain
    // range from the middle.
    if(midpoint - row <= level.length && midpoint + row >= level.length){
        add = '#';
    } else {
        add = ' ';
    }
    
    // Recall the function if no other end cases are met
    pyramid(n, row, level + add);
}*/
    
/* 
// Pseudocode steps
// Create a loop to print every line
    // Initialize the string variable for the line
    // Store the calculation for the midpoint of each line
        // Math.floor((2 * n - 1) / 2)
    // Loop through each character to be added to the line
        // A conditional will decide to use either a space
        // or # symbol
function pyramid(n) {
    // Calculation to find the middle position of the output string
    // Math.floor() is vital to this problem
    // The width of the pyramid will be much higher than the number
    // of the of the input as the # symbols will be in the middle,
    // then spreading out towards the bottom.
    const midpoint = Math.floor((2 * n - 1) / 2);
    
    // Outer loop that prints completed strings 
    for(let row = 0; row < n; row++) {
        // Initialize the output string variable
        let level = '';
        
        // Inner loop that adds the appropriate character to the columns
        for(let column = 0; column < 2 * n - 1; column++) {
            // Find out if a column will have a # or space, depending on
            // the given range of the current row
            // Rows will get a range of # symbols depending on the row
            // position
            // Calculation adds spaces at extremities of the line instead
            // of # symbols
            if(midpoint - row <= column && midpoint + row >= column) {
                level += '#';
            } else {
                level += ' ';
            }
        }
        
        // Console log the row when it is complete
        // Loops through n iterations of completed strings
        console.log(level);
    }
} */
