// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// My first solution:
function reverseInt(n) {
   //first we want to take the number turn it into a string and turn it into an array
   const numberArray =  n.toString().split("")
   //if the arrays first part is a - 
    if(numberArray[0] === "-"){
        //take the first element of the array and add it to the rest of the elements in the array reversed. then turn the whole thing into a integer
       return parseInt(numberArray[0] + numberArray.slice(1).reverse().join(""))
    }else{
        //reverse array and turn it into a n integer parseInt gets rid of zeros before so 005 would just be 5
       return parseInt(numberArray.reverse().join(""))
    }
}


// SOLUTION from walk through
// function reverseInt(n){
//  const reversed = n
//  .toString()
//  .split('')
//  .reverse()
//  .join(''); 
// return parseInt(reversed) * Math.sign(n)
// //Math.sign works by turning to a -1 if negative and a positive 1 if positive 
// //so -50 = -1 and 50 = 1

// }

module.exports = reverseInt;
