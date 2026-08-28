    const button  = document.querySelector("button");
    const progress = document.querySelector(".progress");
    const loading = document.querySelector(".loading")
    const number = document.querySelector(".download-text");

    //   number = 0;
let width = 0;
    button.addEventListener("click", ()=>{
     const bar =  setInterval(()=>{
       width++;
   progress.style.width = width + '%';
  number.textContent = width + '%';

 if(width >=100){
   clearInterval(bar);
   loading.textContent = "Downloaded."
   
 }},100);


        
    });

    