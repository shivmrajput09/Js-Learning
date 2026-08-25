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

 

  const divv = document.createElement("div");

 const inp = document.createElement("input");
 inp.type = "file"; 

 document.body.append(divv);
 divv.append(inp);

 divv.style.margin = "450px";