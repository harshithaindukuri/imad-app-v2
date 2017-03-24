console.log('Loaded!');
var v = document.getElementById('image');
var move;
function mr(){
 move=move+10;    
 v.style.marginLeft=move + 'px';   
}
v.onclick = function(){
  
  var interval = setInterval(mr,100);
  
};
