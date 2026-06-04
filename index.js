const express = require('express');
const _ = require('lodash');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Deliberately using a lodash function that is vulnerable in this version (Prototype Pollution)
  // for the sake of having the scanner pick it up.
  const payload = req.query.payload ? JSON.parse(req.query.payload) : {};
  const merged = _.merge({}, payload);
  
  res.send('Snyk Testing App is running!');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
  console.log('WARNING: This app contains deliberately vulnerable dependencies. Do not run in production.');
});
