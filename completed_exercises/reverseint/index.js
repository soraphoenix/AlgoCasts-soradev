// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;

/* var reverseInt = function (num) {
    // Change the input integer into a string and reverse it    
    var rev = num
    .toString()
    .split('')
    .reverse()
    .join('');
    
    // Multiply the sign of the original integer
    // times the new reversed integer stored in the variable
    return Math.sign(num) * parseInt(rev);
    
} */

/* My original solution

var reverseInt = function (num) {
 
    var rev = Math.sign(num) * num;
        
    var rev = num
    .toString()
    .split('')
    .reverse()
    .join('');
    
    rev = parseInt(rev);
    
    return Math.sign(num) * rev;
    
} */