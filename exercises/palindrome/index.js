// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false
// my solution

// function palindrome(str) {
//     return str.split("").reverse().join("") === str 
//    }

function palindrome(str){
  return str.split('').every((char, i)=>{
    //   debugger;
        return char === str[str.length - i -1];
        //first time char = a, i = 0 str.length 
        //i to make sure it goes through the entire function -1 because arrays start at 0 so minus one from the array. 
    })
}
//every used to do a boolean check on every element in an array 
palindrome('abba')
module.exports = palindrome;
