const fs = require('fs');
const data = Math.random() + '\n';
fs.writeFile('random.txt', data.toString(), err => {
  if (err) throw err;
});
