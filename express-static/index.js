const express = require('express');
const path = require('path');
const app = express();
const join = path.join(__dirname, 'public');
const root = express.static(join);
app.use(root);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
