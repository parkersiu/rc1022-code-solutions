const express = require('express');
const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};
const app = express();

app.get('/api/grades', (req, res) => {
  const object = [];
  for (const property in grades) {
    object.push(grades[property]);
  }
  res.send(object);
});

app.delete('/api/grades/:id', (req, res, id) => {
  const gradesArray = [];
  delete grades[req.params.id];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.sendStatus(203);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
