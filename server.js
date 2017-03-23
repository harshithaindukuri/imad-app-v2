var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles ={
    var article1={
    title:"article one",
    content:"this is first",
}

var createTemp = function(data){
var title=data.title;
var content=data.content;
var htmltemp=`<!Doctype html>
<html>
   <title> ${title} </title>
   <meta name="viewport" content="width=device-width initial-scale=1"/>
 <link href ="/ui/style.css" rel ="stylesheet"/>
   <body>
      <div class=container> 
       <div>
         <a href='/'>home</a>   
        </div> class = container
       hello this is body
       <div>
          ${content}
       </div>
     </div>  
    </body>
</html>  
`;
return 
}

app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article2', function (req, res) {
  res.send(createTemp(article2));
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
