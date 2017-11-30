var MongoClient = require('mongodb').MongoClient

function showLatest( res ){
  MongoClient.connect( process.env.DB, function(err,db){
    if(err)
      console.log(err)
    
    // DB is capped to 20
    // Find, order and project the results
    db.collection( 'latest' )
      .find()
      .project({ search: 1, when: 1, _id: 0})
      .sort({when: -1})
      .toArray(function(err, docs) {
        res.json( docs )
      });
  })
}

module.exports = showLatest;