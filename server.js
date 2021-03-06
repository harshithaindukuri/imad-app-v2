var express = require('express');
var morgan = require('morgan');
var path = require('path');
var app = express();
app.use(morgan('combined'));
var counter =0;
app.get('/counter',function(req,res){
  counter=counter+1;
  res.send(counter.toString());
});
var articles ={
    article1:{
    title:"article one",
    content:"this is first",},
     article2:{
    title:"article 2",
    content:"this is second",},
     article3:{
    title:"article 3",
    content:"this is third",
}
};  
function createTemp(data){
var title=data.title;
var content=data.content;
var htmltemp=`<!Doctype html>
<html>
   <title> ${title} </title>
   <meta name="viewport" content="width=device-width initial-scale=1"/>
 <link href ="/ui/style.css" rel ="stylesheet"/>
    <link aref = "/ui/style.css" rel ="stylesheet"/> 
     
   <body>
       <div>
         <a href='/'>home</a>   
        </div>
       <div>
          ${content}
       </div>
    </body>
</html>  
`;
return htmltemp;
}
var counter=0;
app.get('/counter',function(req,res){
  counter=counter+1;
  res.send(counter.toString());
});


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName =req.params.articleName;
  res.send(createTemp(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
