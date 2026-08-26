const input = document.querySelectorAll(".input");
const buttons = document.querySelectorAll(".submit-btn");
const form = document.querySelector("form");



function dusrePagepr(){    
window.location.href="login.html";
}


 
buttons[0].addEventListener("click" , (e)=>{
  e.preventDefault();

  const userData = {
    Mob_no : input[1].value,
    password : input[2].value
  };
  


localStorage.setItem('userDeatail',JSON.stringify(userData));
alert('Sign-up successFully');

});

