// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const aCharMap = buildCharMap(stringA);
//   const bCharMap = buildCharMap(stringB);
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false;
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false;
//     }
//   }
//
//   return true;
// }
//
// function buildCharMap(str) {
//   const charMap = {};
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//
//   return charMap;
// }

/* MY ORIGINAL SOLUTION
    // Works in SoloLearn, but not in Jest
    // The arguments and variables need some renaming to work in Jest
    function anagram(string1, string2) {
    
    // Regular expression to remove special characters and set the string
    // to lower case. Stored into a variable.
    const stringA = string1.replace(/[^\w]/g, '').toLowerCase();
    const stringB = string2.replace(/[^\w]/g, '').toLowerCase();
    
    // Initialize the objects for the strings to be mapped
    var anagram1 = {};
    var anagram2 = {};
    
    // Map the strings into the objects previously created
    for (let char of stringA) {
        if(!anagram1[char]) {
            anagram1[char] = 1;
        } else {
            anagram1[char]++;
        }
    }
    
    for(let char of stringB) {
        if(!anagram2[char]) {
            anagram2[char] = 1;
        } else {
            anagram2[char]++;
        }
    }
    
    // Initialize the output variable
    let result;
    
    // Compare the keys and values of one anagram to another. The result
    // variable is set according to the outcome of the if statement.
    for(let char in anagram1)
        if(Object.keys(anagram1).length == Object.keys(anagram2).length && anagram1[char] === anagram2[char]) {
            result = true;
        } else {
            return result = false;
        }
    
    return result;
} */

/* function anagram(stringA, stringB) {
    // Store the strings that are mapped via the below helper function
    const aCharMap = buildCharMap(stringA);
    const bCharMap = buildCharMap(stringB);
    
    // Initial comparison of the string contents to verify similar length
    // within the map objects
    if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false;
    }
    
    // Compare one string's contents to the other for similarity
    for(let char in aCharMap) {
        if(aCharMap[char] !== bCharMap[char]) {
            return false;
        }
    }
    
    return true;
}

// Helper function to map the strings to objects
function buildCharMap(str) {
    const charMap = {};
    
    for(let char of str.replace(/[^\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    
    return charMap;
} */

/* function anagram(stringA, stringB) {
    // Compare the strings against each other using the below helper function
    return cleanString(stringA) === cleanString(stringB);
}

// Helper function to clean and sort strings
function cleanString(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
} */
