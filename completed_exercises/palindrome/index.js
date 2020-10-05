// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;

// function palindrome(str) {
//   const reversed = str
//     .split('')
//     .reverse()
//     .join('');
//
//   return str === reversed;
// }

/* function palindrome (str) {
    // Test if the string is strictly equal to itself with methods used to
    // reverse it
    return str === str.split('').reverse().join('');
} */

/* 
function palindrome (str) {
    // This method does not involve reversing the string

    // The string is split into an array of its elements.
    // The array is then iterated through to be compared to itself,
    // passing arguments for the current element and
    // iteration. A calculation is used to reference the indexes in
    // the array that starts at the end of the string
    // using its length in amount of indexes in in minus the value of the
    // current iteration (i) minus 1. This compares the current value being
    // evaluated (char) to the key opposite its position using the
    // calculation.

    // The every() method returns a true/false boolean value in this manner.
    // Even one false output will return a false value for the entire loop.
    return str.split('').every((char, i) => {
        return char === str[str.length-i-1];
    });

    // This isn't a perfect solution as it only needs to get to the middle
    // of the string. Even though this is a pretty fancy solution to find,
    // It's best to follow up with a more efficient solution
    // such as the ones here using string reversal.
} 
*/

// // Another original solution
// function isPalindrome(str) {
//     for (let i = 0; i < (str.length / 2 | 0); i++) { if (str[i] !== str[str.length - i - 1]) return false;
//     }
//     return true;
// }

/* 
// Pseudocode steps
// Reverse the string
// Compare the reversed string to the original string in a
// turn statement for a boolean value
function palindrome (str) {
    // Create a variable to containing the reversed input string
    let reversed = str
        .split('')
        .reverse()
        .join('');
    // Test the variable against the original string for strict equality
    return str === reversed;
} 
*/