var button = document.getElementById("c");
var b=0;
button.onclick=function(){
var request = new XMLHttpRequest(); 
request.onreaddystatechange=function(){
 if(request.readystate === XMLHttpRequest.DONE)
    {
       if(request.status === 200)
       {
           b=b+1;
           var span = document.getElementById("count");
           span.innerHTML=b.toString();
       }
    }
    
};
request.open('get','http://harshithaindukuri.imad.hasura-app.io/counter',true);
request.send(null);
};


