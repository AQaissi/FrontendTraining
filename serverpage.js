const fs = require('fs');
const path = require('path');
const http = require('http');

var express = require('express');
var app = express();
const expressLayouts = require('express-ejs-layouts');
// const parse = require('node-html-parser').parse;

var jsdom  = require('jsdom');

const bodyParser = require('body-parser') ;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let json = [] ; 
let comments = [];

//JSDOM
// const {JSDOM} = jsdom ;

app.get("/",(req,res) =>
{
  res.sendFile(path.join(__dirname , "HTML" , "page.html"),(err) => {
    if (err) throw err; 
  } );
  res.status(200);

});

app.post('/', (req, res) => {
  json.push(JSON.stringify(req.body)); 
  fs.writeFile('comments.json',json,'utf8', (err) => {
    if(err) throw err ;
  });

  fs.readFile('comments.json', 'utf8',  (err, data) => {
    if (err) throw err;
    comments.push(JSON.parse(data).comment);
    

  });
   //To return to same page
   
    res.status(204).send();

  });

const PORT = process.env.PORT || 5000 ; 

app.listen(PORT , () => {
    console.log("Server is running");
});

