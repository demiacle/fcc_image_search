'use strict'
var MongoClient = require('mongodb').MongoClient
var fetch = require('node-fetch');

function processQuery( res, search, page ){

  let query = process.env.QUERY;
  query += '&q=' + search;
  if( page > 1 ){
    query += '&start=' + page;
  } else { 
    page = 1;
  }

  fetch( query )
    .then(response => {
      return response.json();
    })
    .then( json => {
      json = formatJson( json, page );
      updateDB( search );
      res.json( json )
    })
    .catch(err => {console.log(err);});
}

function updateDB( search ){
  MongoClient.connect( process.env.DB, function(err,db){
    if(err)
      console.log(err)
    db.collection('latest').insert({ search: search, when: new Date().toString() })
  })
}

function formatJson( json, page ){
  //console.log( json )
  let items = json.items.map( (item)=>{
    return {
      title: item.title,
      imgURL: item.link,
      pageURL: item.image.contextLink,
      thumbnailURL: item.image.thumbnailLink,
    }
  })
  json = {
    search: json.queries.request[0].searchTerms,
    page: page,
    items: items   
  }
  return json;
}

module.exports = processQuery;