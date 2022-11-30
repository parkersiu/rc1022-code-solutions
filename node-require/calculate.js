const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');
const x = parseInt(process.argv[2]);
const y = parseInt(process.argv[4]);
if (process.argv[3] === 'plus') {
  add(x, y);
} else if (process.argv[3] === 'minus') {
  subtract(x, y);
} else if (process.argv[3] === 'over') {
  divide(x, y);
} else if (process.argv[3] === 'times') {
  multiply(x, y);
} else {
  console.log('invalid operation');
}
