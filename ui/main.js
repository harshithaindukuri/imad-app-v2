console.log('Loaded!');
var v = document.getElementById('image');
function mr(){
 v.style.marginLeft=marginLeft+10;   
}
v.onclick = function(){
  
  var interval = setInterval(mr,100);
  
};
