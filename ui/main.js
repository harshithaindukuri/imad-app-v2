console.log('Loaded!');
var button = document.getElemntByid("b");
var counter=0;
button.onclick=function(){
 
 
counter=counter+1;
var span = document.getElemnetById("count");
span.innerHTML=counter.toString();
};

