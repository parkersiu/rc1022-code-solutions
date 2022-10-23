/* exported capitalizeWord */
// define a new function: capitalizeWord with 1 parameter: word
// assign an empty string to a new variable: result
// use the toUpperCase method to set index 0 of the string to upper case
// use the toLowerCase method to set the rest of the indexes to lower case
// return the result variable
// function capitalizeWord(word) {
//   var result = '';
//   var i = 0;
//   if (word === 'javascript') {
//     result = 'JavaScript';
//   } else {
//     while (i < word.length) {
//       if (i === 0) {
//         result += word[i].toUpperCase();
//       } else if (i > 0) {
//         result += word[i].toLowerCase();
//       }
//       i++;
//     }
//   }
//   return result;
// }
function capitalizeWord(word) {
  var result = '';
  var i = 0;
  while (i < word.length) {
    if (i === 0) {
      result += word[i].toUpperCase();
    } else if (i > 0) {
      result += word[i].toLowerCase();
    }
    i++;
  }
  if (result === 'Javascript') {
    return 'JavaScript';
  }
  return result;
}
// define a new function: capitalizeWord with 1 parameter: word
// assign an empty string to a new variable: result
// assign 0 to a new variable: i
// use a while loop that runs until the length of the string
// in the code block, use an if statement with the condition that i is strictly equal to 0
// if true: use the toUpperCase method of the word at index i, concatenate it with the result variable,
// and assign the result of the expression to the result variable
// if false: use an else if statement to then check if the string is empty
// if true: use the toLowerCase method of the word at index i, concatenate it with the result variable,
// and assign the result of the expression to the result variable
// increment i
// after the while loop, use another if statement to check if the result variable is strictly equal to
// 'Javascript' and if true: return 'JavaScript'
// then, return the result variable
