const express = require('express');
const app = express();
const js = express.json();
const fs = require('fs');
const jsonData = require('./data.json');
const notes = jsonData.notes;
const nextId = jsonData.nextId;

app.use(js);

app.get('/api/notes', (req, res) => {
  const gradesArray = [];
  for (const id in notes) {
    gradesArray.push(notes[id]);
  }
  res.status(200).json(gradesArray);
});

app.get('/api/notes/:id', (req, res, id) => {
  let object = {};
  const idNumber = Number(req.params.id);
  if (idNumber < 1 || isNaN(idNumber)) {
    object.error = 'id must be a positive integer';
    res.status(400).json(object);
  } else if (!notes[req.params.id]) {
    object.error = 'cannot find note with id ' + req.params.id;
    res.status(404).json(object);
  } else {
    object = notes[idNumber];
    res.status(200).json(object);
  }
});

app.post('/api/notes', (req, res) => {
  const object = {};
  if (!req.body.content) {
    object.error = 'content is a required field';
    res.status(400);
  } else {
    object.id = nextId;
    object.content = req.body.content;
    jsonData.notes[nextId] = object;
    jsonData.nextId++;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        object.error = 'An unexpected error occured.';
        console.error(err);
        res.status(500);
        process.exit(1);
      }
    });
    res.status(201).json(object);
  }
});

app.delete('/api/notes/:id', (req, res, id) => {
  const idNumber = Number(req.params.id);
  const object = {};
  if (idNumber < 1 || isNaN(idNumber)) {
    object.error = 'id must be a positive integer';
    res.status(400).json(object);
  } else if (!notes[req.params.id]) {
    object.error = 'cannot find note with id ' + req.params.id;
    res.status(404).json(object);
  } else {
    delete jsonData.notes[req.params.id];
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        object.error = 'An unexpected error occured.';
        console.error(err);
        res.status(500);
        process.exit(1);
      }
    });
  } res.status(204).send();
});

app.put('/api/notes/:id', (req, res) => {
  const idNumber = Number(req.params.id);
  const object = {};
  if (idNumber < 1 || isNaN(idNumber)) {
    object.error = 'id must be a positive integer';
    res.status(400).json(object);
  } else if (!req.body.content) {
    object.error = 'content is a required field';
    res.status(404).json(object);
  } else if (!notes[req.params.id]) {
    object.error = 'cannot find note with id ' + req.params.id;
    res.status(404).json(object);
  } else {
    object.content = req.body.content;
    jsonData.notes[req.params.id].content = req.body.content;
    fs.writeFile('data.json', JSON.stringify(jsonData, null, 2), err => {
      if (err) {
        object.error = 'An unexpected error occured.';
        console.error(err);
        res.status(500);
        process.exit(1);
      }
    });
    res.status(200).json(object);
  }
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
