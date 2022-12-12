const express = require('express');
const app = express();
const js = express.json();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(js);

app.get('/api/grades', (req, res) => {
  const sql = `
  select *
  from "grades"`;
  db.query(sql)
    .then(result => {
      const grades = result.rows;
      res.status(200).json(grades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.post('/api/grades', (req, res) => {
  const score = Number(req.body.score);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'You must include a name, course, and score.'
    });
    return;
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'Score must be an integer between 0 and 100.'
    });
    return;
  }
  const sql = `
  insert into "grades" ("name", "course", "score")
  values ($1, $2, $3)
  returning *;
  `;
  const reqBody = [];
  reqBody.push(req.body.name, req.body.course, req.body.score);
  const params = reqBody;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  if (!req.body.name || !req.body.course || !req.body.score) {
    res.status(400).json({
      error: 'You must include a name, course, and score.'
    });
    return;
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({
      error: 'Score must be an integer between 0 and 100.'
    });
    return;
  }
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
  update "grades"
  set "name"      = $2,
      "course"    = $3,
      "score"     = $4
  where "gradeId" = $1
  returning *`;
  const reqBody = [];
  reqBody.push(gradeId, req.body.name, req.body.course, req.body.score);
  const params = reqBody;
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: 'gradeId must be a positive integer'
    });
    return;
  }
  const sql = `
  delete
  from "grades"
  where "gradeId" = $1
  returning *`;
  const params = [gradeId];
  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with gradeId: ${gradeId}`
        });
      } else {
        res.status(204).send();
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occured.'
      });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
