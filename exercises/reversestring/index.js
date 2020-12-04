// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'
// solution 1:
// function reverse(str) {
//   return str.split("").reverse().join("")
   
// }

// function reverse(str){
//     let reversed = '';
//     for(letter of str){
//         reversed = letter + reversed;
//     }
//     return reversed;
// }

function reverse(str){
  return  str.split('').reduce((reversed, character)=>{
        return character + reversed;
        // take the character we are opperating on right now 
        //add it to the total reversed string and return the result
    }, '');

}
// using reduce to reverse the string is the best way to show the interviewer you know what you are doing

module.exports = reverse;
// #finished
