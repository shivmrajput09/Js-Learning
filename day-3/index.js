const btn = document.querySelector(".btn");
 
const clearbtn = document.querySelector(".clear-btn")
const input = document.querySelector("#inp");
 var div = document.querySelector("#multiply");
 

function table(){
     for(var i = 1;i<=10;i++){
   var result = input.value*i;
   div.innerHTML += result  + "<br>";
     }

 }
function clearTable(){
    div.innerHTML = " ";
 };

 