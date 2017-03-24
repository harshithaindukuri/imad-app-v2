var button = document.getElementById("c");
var b=0;
button.onclick=function(){
b=b+1;
var span = document.getElementById("count");
span.innerHTML=b.toString();
};

