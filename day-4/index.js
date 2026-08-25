 const button = document.querySelector(".btn");

 var word = document.querySelector(".Active-word");


 let isActive = true;
 function toggle(){
        isActive = !isActive;
    word.textContent = isActive?"Active":"Disable";
 }


