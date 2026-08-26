    const form = document.querySelector("form");
    const button = document.querySelector(".submit-btn");
    const inputs = document.querySelectorAll(".input");



    button.addEventListener("click" , (e)=>{
        e.preventDefault();
        
   

 
  


    let userdata = JSON.parse(localStorage.getItem('userDetails'));
    
    if(inputs[0].value === userdata.Mob_no && inputs[1].value === userdata.password){
        alert("login successful");
    }else{
        alert("login failed");
    }


    });


    function span(){
        alert(Math.floor(1000 + Math.random()*9000));
    }