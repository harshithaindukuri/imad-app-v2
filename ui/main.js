console.log('Loaded!');
var v = document.getElementById('image');
var move=0;
var moveRight = function(){
    move=move+1;
    v.style.marginLeft=move;
};
v.onclick = function(){
  
  var interval = setInterval(moveRight,500);
  
};
