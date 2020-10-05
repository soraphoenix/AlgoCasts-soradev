// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o', 'u'];
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++;
//     }
//   }
//
//   return count;
// }

/* MY FIRST ATTEMPT
function vowels(str) {
    // Split the string into a lower case array
    const phrase = str.toLowerCase().split('');
    // Set the output variable
    let count = 0;
    
    // Iterate through each character of the array
    for(let char of phrase) {
        // The output variable increases each time there is a
        // match with any of these vowels
        if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            count++;
        }
    }
    
    return count;
} */

// // Another original solution
// // Pseudocode Steps
// // Set an output count variable
// // Loop through the string in lowercase and check against
// // a regular expression using the match function
//     // Add to the count variable any time there's a match
// //  Return the count variable
// function vowels(str) {
//     let count = 0;

//     for(let char of str.toLowerCase()) {
//         if(char.match(/[aeiou]/gi)) {
//             count++;
//         }
//     }

//     return count;
// }

/*
function vowels(str) {
    // Set the output variable
    let count = 0;
    // Array of characters to check for. Vowels in this case.
    const checker = ['a', 'e', 'i', 'o', 'u'];

    // Iterate through the input string while it's set to lower case
    for (let char of str.toLowerCase()) {
        // Check if the character array includes the current character
        if (checker.includes(char)) {
            // Increase the output variable if true
            count++;
        }
    }

    return count;
} 
// Pseudocode steps
// Initialize the output count variable
// Create an array to store the vowels to be checked
// Loop through the string set to lowercase to check 
// for those vowels
    // Use the includes method for the vowels array
    // Add to the count variable when a vowel is matched
// Return the count variable 
*/

/*
// Pseudocode Steps
// Store the variables found in the string into a variable
// using the match function and a regular expression
// Return a ternary statement that will return either the 
// length of the matched vowels variable if it exists or 0
function vowels(str) {
    // Use a match method that runs through the input string with a
    // regular expression. The g option attempts to match every single
    // character in the regular expression per character in the 
    // input string, while the i option makes the matching 
    // case-insensitive. Result will be the characters from the input
    // string that match the ones specified in the regular expression,
    // and is stored into the variable being set.
    const matches = str.match(/[aeiou]/gi);
    // Ternary expression in the return statement outputs the length of
    // the set variable
    return matches ? matches.length : 0;
}
*/