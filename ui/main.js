var button = document.getElementById("c");
var counter=0;
button.onclick=function(){
var request = new XMLHttpRequest(); 
request.onreaddystatechange=function(){
 if(request.readyState === XMLHttpRequest.DONE)
    {
       if(request.status === 200)
       {
          var counter = request.responseText;
           var span = document.getElementById("count");
           span.innerHTML=c.toString();
       }
    }
    
};
request.open('get','http://harshithaindukuri.imad.hasura-app.io/counter',true);
request.send(null);
};


