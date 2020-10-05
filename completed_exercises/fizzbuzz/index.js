// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // Is the number a multiple of 3 and 5?
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      // Is the number a multiple of 3?
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

module.exports = fizzBuzz;

/* function fizzbuzz(){
  // The variable i does not need to be declared in this case
 let i = 1;
  // Create a for loop that iterates the desired # of times
    // 
 for(i=1; i<=100; i++) {
    // Find out if the current number being iterated through is divisible
    // by all of the numbers in question first. The individual numbers
    // are accounted for later, starting with the smallest.
    // The most vital part of this function is the modulo (%) operator
    // The modulo helps create the condition (a 0 remainder)
    // that the function works through to output the desired result.
    if(i % 3 == 0 && i % 5 == 0) {
        document.write('fizzbuzz <br>')
    } else if(i % 3 == 0) {
        document.write('fizz <br>')
    } else if(i % 5 == 0) {
        document.write('buzz <br>')
    } else {
        document.write(i + '<br>')
    }
}
} */