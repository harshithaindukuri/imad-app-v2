var button = document.getElementById("c");
var c=0;
button.onclick=function(){
c=c+1;
var span = document.getElementById("count");
span.innerHTML=c.toString();
};

