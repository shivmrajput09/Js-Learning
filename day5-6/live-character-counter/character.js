const count = document.querySelector("#count");
 const textarea = document.querySelector("textarea");


 textarea.addEventListener("input" , (e) => {
 count.textContent = e.target.value.length;
 })