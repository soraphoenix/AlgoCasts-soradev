// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

module.exports = capitalize;

// function capitalize(str) {
//   const words = [];
//
//   for (let word of str.split(' ')) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }
//
//   return words.join(' ');
// }

/* MY FIRST ATTEMPT
function capitals(str) {
    // Split the input string into an array and 
    // initialize the variable i for iteration
    var capInit = str.split('');
    var i = 0;
    
    // Iterate through each element in the array
    for(i = 0; i <= capInit.length; i++) {
        // Capitalize the first letter of the string
        if(i === 0) {
            capInit[i] = capInit[i].toUpperCase();
        }
        // Capitalize any letter after a space
        if(capInit[i] === ' ') {
            capInit[i + 1] = capInit[i + 1].toUpperCase();
        }
    }
    
    // Join the array back into a string
    capInit = capInit.join('');
    
    return capInit;
} */

/* function capitals(str) {
    // Initialize an array to be used for the output string
    const words = [];
    
    // Split the input string with spaces. The array will consist
    // of just the words. This can be done inside of a for loop.
    for(let word of str.split(' ')) {
        // Capitalize the first letter of the current word in 
        // the split string and add the rest of the word to it,
        // while pushing it into the output array variable
        // Loops until all words have gone through the function
        words.push(word[0].toUpperCase() + word.slice(1));
    }
    // Join the output array back into a string, putting spaces
    // back in
    return words.join(' ');
} */

/* function capitals(str) {
    // Initialize the output variable
    // Store the first value of the input string, capitalize it
    // as it would not be capitalized in the upcoming loop
    // Side note: Apparently, strings can be index-referenced like arrays
    var result = str[0].toUpperCase();
    
    // Iterate through each character in the string except the first
    // one 
    for (i = 1; i < str.length; i++) {
        // If the character has a space to the left, The character is
        // capitalized and then added to the output variable
        if(str[i-1] === ' ') {
            result += str[i].toUpperCase();
        } else {
            // If it does not, it is added to the output variable as is
            result += str[i];
        }
    }
    
    return result;
} */