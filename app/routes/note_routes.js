
'use strict';

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();  //req'd for res.json(req.body);

module.exports = function(app, db){

  app.get('/notes/:id', (req, res) => {
    console.log(`Get the values for note ${req.params.id}`);
    res.end();
  });

  app.post('/notes', jsonParser, (req, res) => {
    //console.log(req.body);
    const note = {
      text: 'hello',
      title: req.body.title
    }; 
    db.collection('notes').insert(note, (err, result) => {
      if(err) {
        res.send({ error: 'Something went wrong'});
      } else {
        console.log(result.ops);  
        res.json(result.ops);
      }
    });
    // console.log(req.body);  
    // res.json(req.body);
  });
};