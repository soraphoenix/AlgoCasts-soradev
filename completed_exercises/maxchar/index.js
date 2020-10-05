// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

/* function maxChars (str) {
// Created this solution while using SoloLearn. Wouldn't work in this
// exercise immediately, but the logic is the same. Output's a little
// different than the standard for this course.

// At the very least,
// create variables for the character map object, the key for the most used
// character, and the variable to store the number of times it's used.
const words = str;

var count = {};

let max = 0;

let maxKey = '';

// Create the loop to populate the character map object
for (let char of words) {
    if (!count[char]) {
        count[char] = 1;
    } else {
        count[char]++;
    }
}

// Loop through the character map object to update the result variables
// to the highest value and associated key
for (let char in count) {
    if(count[char] > max) {
        max = count[char];
        maxKey = char;
    }
}

// This result was meant for printing out on SoloLearn. Only the key
// of the most frequently used character is necessary in this exercise.
return maxKey + ', ' + max
} 

// Time complexity: O(2n) */