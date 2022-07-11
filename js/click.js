var count=0;
var btn=document.getElementById('edu_btn');
btn.addEventListener("click",function(){
  count++;
  if (count%2==0) {
    btn.innerHTML="CLICK TO SHOW MORE";
  }
  else {
    btn.innerHTML="SHOW LESS";
  }
});
