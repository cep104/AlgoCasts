// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// My answer: 
function maxChar(str) {
const chars = {}
for (let char of str){
   if(chars[char]) {
       chars[char] += 1;
   }else{
        chars[char] = 1;
   }
}
return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
}
//get the object keys, function value1 greater than value 2 then return value 1 otherwise return value 2 then go through the process again till you go through all the keys. returns the key of the biggest value

// function maxChar(str) {
//     const charMap = {}
//     let max = 0;
//     //starts at 0 needs to change once bigger than zero and so on and son on till it is the max value
//     let maxChar = ''; 
//     //starts as empty and will change based on what the max value is this will hold the max key
// for (let char of str){
//    if(charMap[char]) {
//        charMap[char] += 1;
//    }else{
//         charMap[char] = 1;
//    }
// }

// for (let char in charMap){
//     if(charMap[char] > max){
//         //goes through each value and sees if it is bigger than the current max number 
//     max = charMap[char]
//     //if true changes the max to the bigger number
//     maxChar = char
//     //if true change the key to the max values key
//     }
// }
// return maxChar //return that max value
// }






module.exports = maxChar;
