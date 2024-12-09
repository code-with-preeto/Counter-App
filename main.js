const counter=document.getElementById("counter");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const reset=document.getElementById("reset");

let count=0;


plus.addEventListener("click",increment);
minus.addEventListener("click",decrement);
reset.addEventListener("click",resetCounter)


function increment(){
    count++;
    counter.innerHTML=count;
}
function decrement(){
    if(count !== 0){
        count--;
        counter.innerHTML=count;
    }
   
}
function resetCounter(){
  count=0;
  counter.innerHTML=count;
}