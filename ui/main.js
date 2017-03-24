var button = document.getElementById("c");
var bf=0;
button.onclick=function(){
bf=bf+1;
var span = document.getElementById("count");
span.innerHTML=bf.toString();
};

