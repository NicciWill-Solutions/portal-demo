'use strict';

const express = require('express');
const MongoClient =  require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const db = require('./config.js');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true}));    //req'd to parse body of x-www-form-urlencoded form

app.use(express.static('public'));

MongoClient.connect(db.url, (err, database) => {
  if(err) return console.log(err);
  require('./app/routes')(app, database);

  app.listen(port, () => {
    console.log(`We are live on ${port}`);
  });
});

