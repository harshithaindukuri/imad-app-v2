var button = document.getElementById("c");
button.onclick=function(){
var request = new XMLHttpRequest(); 
request.onreaddystatechange=function(){
 if(request.readyState === XMLHttpRequest.DONE)
    {
       if(request.status === 200)
       {
           var counter = request.responseText;
           var span = document.getElementById("count");
           span.innerHTML=counter.toString();
       }
    }
    
};
request.open('get','http://harshithaindukuri.imad.hasura-app.io/counter',true);
request.send(null);
};


