var button = document.getElementById("counter");
var counter=0;
button.onclick=function(){
var request = new XMLHttpRequest(); 
request.onreaddystatechange=function(){
 if(request.readystate === XMLHttpRequest.DONE)
    {
       if(request.status === 200)
       {
           counter=counter+1;
           var span = document.getElementById("count");
           span.innerHTML=counter.toString();
       }
    }
    
};
request.open('get','http://harshithaindukuri.imad.hasura-app.io/counter',true);
request.send(null);
};


