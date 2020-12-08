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

// function reverse(str){
//   return  str.split('').reduce((reversed, character)=>{
//         return character + reversed;
//         // take the character we are opperating on right now 
//         //add it to the total reversed string and return the result
//     }, '');

// }
// using reduce to reverse the string is the best way to show the interviewer you know what you are doing

//using recursion 
//runs through the string through the function till the string is done("")
//once it is done return the new string 
//making function 
function reverse(str){
    
    if(str === ""){
        
     return str 
    }else{
        // debugger;
     return reverse(str.substr(1)) + str[0]
     
    }
   }
   //substr cuts off the string at the index you put
   //first time return bcd + a (bcda)
   //second time return cd + b (cdba)
   //third time return d  (dcba)
   //fourth time return "" so returns the new string dcba
// reverse('abcd') have to add manual function call to use debugger
module.exports = reverse;
// #finished
// node inspect.js 
// c to get to debugger
//repl