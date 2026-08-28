 const paragraph = document.querySelector("p");
 const button = document.querySelector("button");

   button.addEventListener("dblclick", () => {
    paragraph.textContent = " double click by hello Shivam";
  });


  button.addEventListener("click" , () => { 
    
paragraph.textContent = "one click only";
  });
  
    button.addEventListener("mouseenter" , (event) => {
 console.log(event.target);
 l
    });
;  
    button.addEventListener("mouseleave" , () => {
paragraph.textContent = " mouse leave";
  });
  



  const inp = document.createElement("input");

  inp.type = "text";
  inp.placeholder = "enter your name";


  
document.body.append(inp);



inp.addEventListener("input" , () => {
 console.log(inp.value); 
}

);

const form = document.querySelector("form");

form.addEventListener("submit" , (event)=>{
  event.preventDefault();
  console.log("form submit successfully.");
})