// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   let array = str.split("")
   array.reverse()
   let stringReversed = array.join("")
   return stringReversed
}

module.exports = reverse;
