const express = require('express');
const app = express();
let nextId = 1;
let grades = {};
const js = express.json();

app.use(js);

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.json(gradesArray);
});

app.delete('/api/grades/:id', (req, res, id) => {
  const gradesArray = [];
  delete grades[req.params.id];
  for (const property in grades) {
    gradesArray.push(grades[property]);
  }
  res.sendStatus(204);
});

app.post('/api/grades', (req, res) => {
  req.body.id = nextId;
  const body = req.body;
  const object = {
    id: body
  };
  grades = object;
  nextId++;
  res.status(201).json(object.id);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});

// http -v get localhost:3000/api/grades
// http -v post localhost:3000/api/grades name="Brendan Eich" course="JavaScript" score:=100
// http -v post localhost:3000/api/grades name="Tim Davis" course="JavaScript" score:=53
