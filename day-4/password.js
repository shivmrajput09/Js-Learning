const input = document.querySelector(".input");
const div = document.querySelector("div");

const eye = document.querySelector("#eye-id");


function dabao(){
    input.type = input.type==="password"?"text" :"password";
    if(input.type === "text"){
eye.className = "fa-solid fa-eye-slash";
    } else{
        eye.className ="fa-solid fa-eye";
    }
 

}

 

  

 