 
const buttons = document.querySelectorAll(".buttons");

buttons.forEach(buttons =>{
 

  buttons.addEventListener("dblclick",(e)=>{
    const color = e.target.dataset.color;

    const notifications = document.getElementById(color);
     
    notifications.style.display = "flex";

    setTimeout(()=>{
    notifications.style.display = "none";
    },3000)

  })
});
  
   

 



 


 